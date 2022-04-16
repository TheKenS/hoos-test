import {useState} from 'react'
import styles from './counter.module.css'

const Counter02: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

        return (
            <div className={styles.counter}>
                <div className={styles.displayer}>计数：{count}</div>
                <div className={styles.btns}>
                    <button onClick={decrease}>减少</button>
                    <button onClick={increase}>增加</button>
                    <button onClick={reset}>重置</button>
                </div>
            </div>
        )
}

export default Counter02