import { useMemo, useRef, useState } from "react";
import { useInterval2 } from "../hooks/interval";
import styles from "./counter.module.css";

const Counter02: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const callBack1 = () => {
    setCount((count) => count + 1);
  };

  const callBack2 = () => {
    setCount(0);
  };

  const [start, pause, reset] = useInterval2(callBack1, callBack2);

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>计数：{count}</div>
      <div className={styles.btns}>
        <button onClick={start}>启动</button>
        <button onClick={pause}>暂停</button>
        <button onClick={reset}>重置</button>
      </div>
    </div>
  );
};

export default Counter02;
