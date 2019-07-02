import * as React from 'react';

type CounterProps = {
    name?: string
}
type CounterState = {
    number: number
}

export default class Counter extends React.Component<CounterProps, CounterState> {
    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <p>{this.props.name}</p>
                <button onClick={() => {
                    this.setState((preState) => {
                        let number = preState.number + 1;
                        return {
                            number
                        }
                    })
                }}>+1</button>
            </div>
        )
    }
}