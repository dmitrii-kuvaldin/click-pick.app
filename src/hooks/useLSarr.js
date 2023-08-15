import { useEffect, useState } from 'react';

function getSavedValue(key, defaultValue) {
  const savedValue = localStorage.getItem(key);
  return JSON.parse(savedValue) || defaultValue;
}
function useLocalStorageArr(key, initialValue) {
  const [value, setValue] = useState(getSavedValue(key, initialValue));
  console.log('value ===>', value);
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}

export default useLocalStorageArr;
