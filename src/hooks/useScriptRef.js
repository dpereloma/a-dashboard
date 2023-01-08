import { useEffect, useRef } from 'react';

export const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    [],
  );

  return scripted;
};
