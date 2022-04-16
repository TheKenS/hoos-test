import {Component, ReactNode} from 'react'
import styles from './counter.module.css'

interface CounterProps {

}

interface CounterState {
    count: number
}

class Counter01 extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    }

    constructor(props: CounterProps){
        super(props)
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render(): ReactNode {
        return (
            <div className={styles.counter}>
                <div className={styles.displayer}>计数：{this.state.count}</div>
                <div className={styles.btns}>
                    <button onClick={this.decrease}>减少</button>
                    <button onClick={this.increase}>增加</button>
                    <button onClick={this.reset}>重置</button>
                </div>
            </div>
        )
    }
}

export default Counter01