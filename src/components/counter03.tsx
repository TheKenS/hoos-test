import { useState, useEffect } from 'react'
import styles from './counter.module.css'

const Counter02: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])


    return (
        <div className={styles.counter}>
            <div className={styles.displayer}>计数：{count}</div>
        </div>
    )
}

export default Counter02