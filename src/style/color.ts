// tslint:disable: no-bitwise

const shade = (color: string, amount: number) => {
  color = color.replace("#", "");

  const num = parseInt(color, 16);

  const _r = (num >> 16) + amount;
  const _g = (num & 0x0000ff) + amount;
  const _b = ((num >> 8) & 0x00ff) + amount;

  const r = _r > 255 ? 255 : _r < 0 ? 0 : _r;
  const g = _g > 255 ? 255 : _g < 0 ? 0 : _g;
  const b = _b > 255 ? 255 : _b < 0 ? 0 : _b;

  return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
};

const darkenFactor = -30;
const lightenFactor = 20;

//
//

const white = "#ffffff";
const black = "#000000";
const transparent = "transparent";

const grey = "#202020";
const offWhite = "#f7f7f7";
const darkGrey = "#2d2d2d";
const lightGrey = "#dddddd";

const turquoise = "#1abc9c";
const emerland = "#2ecc71";
const peterriver = "#3498db";
const amethyst = "#9b59b6";
const wetasphalt = "#34495e";
const greensea = "#16a085";
const nephritis = "#27ae60";
const belizehole = "#2980b9";
const wisteria = "#8e44ad";
const midnightblue = "#2c3e50";
const sunflower = "#f1c40f";
const carrot = "#e67e22";
const alizarin = "#e74c3c";
const clouds = "#ecf0f1";
const concrete = "#95a5a6";
const orange = "#f39c12";
const pumpkin = "#d35400";
const pomegranate = "#c0392b";
const silver = "#bdc3c7";
const asbestos = "#7f8c8d";
const teal = "#009688";

//
const primary = teal;
const secondary = midnightblue;
const danger = pumpkin;

export {
  //
  white,
  black,
  transparent,
  //
  grey,
  teal,
  //
  offWhite,
  darkGrey,
  lightGrey,
  //
  //
  primary,
  secondary,
  danger,
  //
  //
  turquoise,
  emerland,
  peterriver,
  amethyst,
  wetasphalt,
  greensea,
  nephritis,
  belizehole,
  wisteria,
  midnightblue,
  sunflower,
  carrot,
  alizarin,
  clouds,
  concrete,
  orange,
  pumpkin,
  pomegranate,
  silver,
  asbestos,
  //
  //
  //
  shade,
  darkenFactor,
  lightenFactor,
};
