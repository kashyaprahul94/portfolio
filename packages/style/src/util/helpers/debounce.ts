const debounce = (func: () => void, delay: number) => {
  let inDebounce: NodeJS.Timeout;

  return (...args: []) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(null, args), delay);
  };
};

export { debounce };
export default debounce;
