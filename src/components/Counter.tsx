import * as React from 'react';
// 引入connect，让组件和仓库建立连接
import { connect } from 'react-redux';
// 引入actions，用于传给connect
import actions from '../store/actions/counter';
// 引入接口约束
import { IStore, Counter } from '../types';

type CounterProps = {
    number: number,
    // add是一个函数
    add: any,
    // subtract是一个函数
    subtract:any,
    addAsync:any,
}
type CounterState = {
    // number: number
}

class CounterComponent extends React.Component<CounterProps, CounterState> {
    state = {
        // number: 0
    }

    render() {
        let { number, add, subtract, addAsync } = this.props;
        return (
            <div>
                <p>Counter</p>
                <p>{number}</p>
                <button onClick={add}>+1</button>
                <br/>
                <button onClick={subtract}>-1</button>
                <br/>
                <button onClick={addAsync}>异步加1</button>
            </div>
        )
    }
}

// 这个connect需要执行两次，第二次需要我们把这个组件CounterComponent传进去
// connect第一次执行，需要两个参数，

// 需要传给connect的函数
const mapStateToProps = function(state: IStore): Counter {
    return state.counter
};

export default connect(
    mapStateToProps,
    actions
)(CounterComponent);