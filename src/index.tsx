import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

// 用Provider包裹CounterComponent组件
// 并且把store传给Provider
// 这样Provider可以向它的子组件提供store
ReactDom.render(
    <Provider store={store}>
        <Counter />
        <br/>
        <Counter2 />
    </Provider>,
    document.getElementById("app")
);