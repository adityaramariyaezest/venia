export const setToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const setToLocalStorageAsArray = (key, data) => localStorage.setItem(key, data);
export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
