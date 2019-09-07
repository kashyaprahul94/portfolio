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
  column: "column",
  row: "row",
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
  xl: "1200px",
  l: "992px",
  m: "670px",
  s: "576px",
};

const layout = {
  onXL: (styles: string) => {
    return `@media (min-width: ${breakPoints.xl}) {      
      ${styles}
    }`;
  },
  onL: (styles: string) => {
    return `@media (min-width: ${breakPoints.l}) {      
      ${styles}
    }`;
  },
  onM: (styles: string) => {
    return `@media (min-width: ${breakPoints.m}) {      
      ${styles}
    }`;
  },
  onS: (styles: string) => {
    return `@media (min-width: ${breakPoints.s}) {      
      ${styles}
    }`;
  },

  belowXL: (styles: string) => {
    return `@media (max-width: ${breakPoints.xl}) {      
      ${styles}
    }`;
  },
  belowL: (styles: string) => {
    return `@media (max-width: ${breakPoints.l}) {      
      ${styles}
    }`;
  },
  belowM: (styles: string) => {
    return `@media (max-width: ${breakPoints.m}) {      
      ${styles}
    }`;
  },
  belowS: (styles: string) => {
    return `@media (max-width: ${breakPoints.s}) {      
      ${styles}
    }`;
  },
};

export { border, position, display, alignment, breakPoints, layout };
