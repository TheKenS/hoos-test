import { useState, useEffect, useRef } from "react";
import styles from "./counter.module.css";
import { useInterval } from "../hooks/interval";

const Counter06: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const callback = () => {
    setCount((count) => count + 1);
  };

  useInterval(callback, 1000, count);

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>计数：{count}</div>
    </div>
  );
};

export default Counter06;
