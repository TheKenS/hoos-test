import { useEffect, useMemo, useRef } from "react";

export const useInterval = (
  callBack: () => void,
  delay: number,
  count: number
) => {
  useEffect(() => {
    let id = setInterval(() => {
      callBack();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export const useInterval2 = (callBack1: () => void, callBack2: () => void) => {
  let timer = useRef<any>();
  console.log(timer);

  const start = useMemo(() => {
    return () => {
      if (!timer.current) {
        timer.current = setInterval(callBack1, 1000);
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
      callBack2();
    };
  }, []);

  return [start, pause, reset];
};
