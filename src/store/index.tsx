// 需要使用到thunk，所以引入中间件applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// 引入redux-thunk，处理异步
// 现在主流处理异步的是saga和thunk
import thunk from 'redux-thunk';
// 引入日志
import logger from "redux-logger";

// 接着创建仓库和中间件
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;