const durations = {
  short: "0.3s",
  medium: "0.5s",
  long: "0.8s",
  longer: "1.2s"
};

const transitionDefault = {
  property: "all",
  duration: durations.short
};

const transition = ({
  property = transitionDefault.property,
  duration = transitionDefault.duration
}: {
  property?: string;
  duration?: string;
} = transitionDefault) => `${property} ease ${duration}`;

//
//

const scaleDefault = {
  xFactor: 1.0,
  yFactor: 1.0
};
const scale = ({
  xFactor = scaleDefault.xFactor,
  yFactor = scaleDefault.yFactor
} = scaleDefault) => `scale(${xFactor}, ${yFactor})`;

export { durations, transition, scale };
