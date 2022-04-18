import { useState, useEffect, useRef } from "react";
import styles from "./counter.module.css";

const Counter05: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = count;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval count" + count);

      setCount(savedCallback.current + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.counter}>
      <div className={styles.displayer}>计数：{count}</div>
    </div>
  );
};

export default Counter05;
