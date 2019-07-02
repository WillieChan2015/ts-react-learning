// 导入类型校验的接口
// 用来约束state的
import { IStore } from '../../types';

// 导入约束action的接口
import { Action } from '../actions/counter';
// 引入action动作行为的常量
import * as types from "../action-types";

let initState: IStore = {
    number: 0
};

export default function(state: IStore = initState, action: Action) {
    // 拿到老的状态state和新的状态action
    // action是一个动作行为，而这个动作行为，在计数器中是具备 加 或 减 两个功能
    // 判断action的行为类型
    switch (action.type) {
        case types.ADD:
            return {
                number: state.number + 1
            }
        case types.SUBTRACT:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}