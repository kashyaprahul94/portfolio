import React, { useState, useEffect } from "react";

import { throttle } from "../../util/helpers";

interface IOptions {
  throttle?: number;
}

const DefaultOptions: IOptions = {
  throttle: 200,
};

let supportsPassive = false;

const checkIfPassiveScrollingIsSupported = () => {
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: () => {
        supportsPassive = true;
      },
    });
    // tslint:disable-next-line: no-empty
    const handler = () => {};
    window.addEventListener("testPassive", handler, opts);
    window.removeEventListener("testPassive", handler, opts);
    // tslint:disable-next-line: no-empty
  } catch (e) {}
};

const useScrollPosition = (_options: IOptions) => {
  //
  const options: IOptions = {
    ...DefaultOptions,
    ..._options,
  };

  const getPosition = () => ({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  checkIfPassiveScrollingIsSupported();

  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = throttle(
      () => setPosition(getPosition()),
      options.throttle!,
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false,
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export { useScrollPosition };
export default useScrollPosition;
