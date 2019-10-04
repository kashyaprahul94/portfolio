const borderRadius = {
  xxl: "20px",
  xl: "10px",
  l: "7px",
  m: "5px",
  s: "2px",
};

const borderWidth = {
  s: "1px",
  m: "2px",
  l: "5px",
};

const borderStyle = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",

  default: "solid",
};

const border = { radius: borderRadius, width: borderWidth, style: borderStyle };

const position = {
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky",
};

const display = {
  flex: "flex",
  inline: "inline",
  inlineBlock: "inline-block",
  block: "block",
  none: "none",
  grid: "grid",
  column: "column",
  row: "row",
  wrap: "wrap",
};

const alignment = {
  top: "top",
  left: "left",
  center: "center",
  middle: "middle",
  right: "right",
  start: "start",
  end: "end",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
};

const breakPoints = {
  xl: {
    max: "1199.98px",
    min: "1200px",
  },
  l: {
    max: "991.98px",
    min: "992px",
  },
  m: {
    max: "767.98px",
    min: "768px",
  },
  s: {
    max: "575.98px",
    min: "576px",
  },
  xs: {
    max: "479.98px",
    min: "480px",
  },
};

const layout = {
  onXL: (styles: string) => {
    return `@media (min-width: ${breakPoints.xl.min}) {      
      ${styles}
    }`;
  },
  onL: (styles: string) => {
    return `@media (min-width: ${breakPoints.l.min}) and (max-width: ${
      breakPoints.xl.max
    }) {      
      ${styles}
    }`;
  },
  onM: (styles: string) => {
    return `@media (min-width: ${breakPoints.m.min}) and (max-width: ${
      breakPoints.l.max
    }) {      
      ${styles}
    }`;
  },
  onS: (styles: string) => {
    return `@media (min-width: ${breakPoints.s.min}) and (max-width: ${
      breakPoints.xs.max
    }) {      
      ${styles}
    }`;
  },
  onXS: (styles: string) => {
    return `@media (max-width: ${breakPoints.xs.min}) {      
      ${styles}
    }`;
  },

  belowXL: (styles: string) => {
    return `@media (max-width: ${breakPoints.xl.min}) {      
      ${styles}
    }`;
  },
  belowL: (styles: string) => {
    return `@media (max-width: ${breakPoints.l.min}) {      
      ${styles}
    }`;
  },
  belowM: (styles: string) => {
    return `@media (max-width: ${breakPoints.m.min}) {      
      ${styles}
    }`;
  },
  belowS: (styles: string) => {
    return `@media (max-width: ${breakPoints.s.min}) {      
      ${styles}
    }`;
  },
  belowXS: (styles: string) => {
    return `@media (max-width: ${breakPoints.s.min}) {      
      ${styles}
    }`;
  },
};

export { border, position, display, alignment, breakPoints, layout };
