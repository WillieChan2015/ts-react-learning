// 多个reducer是通过combineReducers方法，进行合并的，因为我们一个项目当中肯定是存在非常多个reducer，所以统一在这里处理

// 引入合并方法
import { combineReducers } from "redux";
// 引入需要合并的reducer
import counter from "./counter";
// 引入需要合并的reducer
import counter2 from "./counter2";

const reducers = combineReducers({
    counter,
    counter2
});

export default reducers;