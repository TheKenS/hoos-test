import { useState } from 'react'
import styles from './counter.module.css'
import { useCount, useCount2 } from '../hooks/useCount'

const Counter02: React.FC = () => {
    const { count, decrease, increase, reset } = useCount2()
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