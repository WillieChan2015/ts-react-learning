import * as types from "../action-types";

// 定义两个接口，分别约束add和subtract的type类型
export interface IAdd {
    type: typeof types.ADD2
}

export interface ISubtract {
    type: typeof types.SUBTRACT2
}

// 再导出一个type
// type是用来给类型起别名的
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而 ./store/reducers/index.tsx中的action会是下面某一个函数的返回值
export type Action = IAdd | ISubtract

export default {
    add(): IAdd {
        // 需要返回一个action对象
        // type为动作的类型
        return {
            type: types.ADD2
        }
    },

    subtract(): ISubtract {
        return {
            type: types.SUBTRACT2
        }
    },

    addAsync(): any {
        return function(dispatch: any, getState: any) {
            setTimeout(() => {
                dispatch({type: types.ADD2});
            }, 1000);
        }
    }
}