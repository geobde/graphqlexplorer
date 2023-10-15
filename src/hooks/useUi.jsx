import { useState, useCallback } from "react";

const useUi = (defaultValue = "", key = "", persist = false) => {
  const [localValue, setLocalValue] = useState(
    localStorage.getItem(key) || defaultValue
  );

  const setValue = useCallback(
    (newValue) => {
      if (persist) {
        localStorage.setItem(key, newValue);
      }
      setLocalValue(newValue);
    },
    [key, persist]
  );

  return [localValue, setValue];
};

export default useUi;
