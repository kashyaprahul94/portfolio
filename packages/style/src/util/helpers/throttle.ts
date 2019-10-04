const throttle = (func: () => void, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return (...args: []) => {
    if (!lastRan) {
      func.apply(null, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);

      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(null, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export { throttle };
export default throttle;
