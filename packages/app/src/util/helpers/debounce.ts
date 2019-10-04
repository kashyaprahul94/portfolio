const debounce = (func: () => void, delay: number) => {
  let inDebounce: NodeJS.Timeout;

  return (...args: ReadonlyArray<any>) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};

export { debounce };
export default debounce;
