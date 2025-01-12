import { useCallback, useEffect, useMemo, useState } from "react";
import StorageManager, {
  StorageOptions,
  StorageType,
} from "./browserStorageManageHelpers";
import { isSameJsonObj } from "./commonHelpers";

export const useBrowserStorage = <T>(
  storageType: StorageType,
  key: string,
  initialValue: T,
  options?: StorageOptions
) => {
  const storageManager = StorageManager.getInstance<T>(storageType, options);
  const defaultValue = useMemo(() => {
    const storedValue = storageManager.get(key);
    return storedValue !== null ? storedValue : initialValue;
  }, []);

  const [value, setValue] = useState<T>(defaultValue); // subscriber 등록

  useEffect(() => {
    const unsubscribe = storageManager.subscribe(key, (newValue) => {
      setValue((prev) => {
        return isSameJsonObj(prev, newValue) ? prev : (newValue as T);
      });
    });
    return unsubscribe;
  }, [key]);

  const updateValue = useCallback((newValue: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const valueToStore =
        newValue instanceof Function ? newValue(prev) : newValue;
      storageManager.set(key, valueToStore);
      return isSameJsonObj(prev, valueToStore) ? prev : (newValue as T);
    });
  }, []);

  const removeValue = useCallback(() => {
    storageManager.remove(key);
  }, [key]);

  return [value, updateValue, removeValue] as const;
};
