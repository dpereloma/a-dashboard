import { useCallback, useEffect, useRef, useState } from 'react';

export const useCountdown = (interval = 1000) => {
  const timerRef = useRef();
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState('idle');

  const run = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCounter((state) => state - interval / 1000);
      }, interval);
    }
  };

  const clear = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = (seconds) => {
    setCounter(seconds);
    setStatus('active');
    run();
  };

  const pause = () => {
    setStatus('paused');
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const resume = () => {
    setStatus('active');
    if (status === 'paused') {
      run();
    }
  };

  const reset = () => {
    clear();
    setStatus('idle');
    setCounter(0);
  };

  useEffect(() => {
    if (counter <= 0) {
      clear();
      setStatus('finished');
    }
  }, [counter, clear]);

  return { current: counter, start, pause, resume, reset, status };
};
