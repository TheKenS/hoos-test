import { Reducer, useReducer, useState } from "react"

export function useCount() {
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

    return { count, decrease, increase, reset }
}

function countReducerHandler(state: number, action: string) {
    switch (action) {
        case 'decrease':
            return state - 1;
        case 'increase':
            return state + 1;
        case 'reset':
            return 0;
        default:
            return state
    }
}

export function useCount2() {
    const [count, dispatch] = useReducer<Reducer<number, string>>(countReducerHandler, 0)
    const decrease = () => {
        dispatch('decrease')
    }

    const increase = () => {
        dispatch('increase')
    }

    const reset = () => {
        dispatch('reset')
    }
    return { count, decrease, increase, reset }
}