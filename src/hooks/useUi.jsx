import { useState, useCallback } from "react";

const useUi = (defaultValue = "", key = "", persist = false) => {
  const [localValue, setLocalValue] = useState(
    (typeof window !== "undefined" && localStorage.getItem(key)) || defaultValue
  );

  const setValue = useCallback(
    (newValue) => {
      if (persist && typeof window !== "undefined") {
        localStorage.setItem(key, newValue);
      }
      setLocalValue(newValue);
    },
    [key, persist]
  );

  return [localValue, setValue];
};

export default useUi;
