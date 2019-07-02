export interface IStore {
    counter: Counter,
    counter2: Counter2
}

// 分别对应Counter组件
export interface Counter {
    number: number
}
// 分别对应Counter2组件
export interface Counter2 {
    number: number
}