const borderRadius = {
  xl: "10px",
  l: "7px",
  m: "5px",
  s: "2px"
};

const borderWidth = {
  s: "1px",
  m: "2px",
  l: "5px"
};

const borderStyle = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",

  default: "solid"
};

const border = { radius: borderRadius, width: borderWidth, style: borderStyle };

const position = {
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky"
};

const display = {
  flex: "flex",
  inline: "inline",
  inlineBlock: "inline-block",
  block: "block"
};

const alignment = {
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
  spaceEvenly: "space-evenly"
};

export { border, position, display, alignment };
