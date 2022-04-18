import { useMemo, useRef, useState } from "react";
import styles from "./counter.module.css";

const Counter02: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  let timer = useRef<any>();
  console.log(timer);

  const start = useMemo(() => {
    return () => {
      if (!timer.current) {
        timer.current = setInterval(() => {
          setCount((count) => count + 1);
        }, 1000);
      }
    };
  }, []);

  const pause = useMemo(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  const reset = useMemo(() => {
    return () => {
      pause();
      setCount(0);
    };
  }, []);

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
