const fromUnit = (unitValue: string) => parseInt(unitValue, 10);

const dimensions = {
  zero: 0,
  unit: "1px",
  xxs: "2px",
  xs: "3px",
  s: "5px",
  m: "8px",
  l: "12px",
  xl: "15px",
  xxl: "20px",
  xxxl: "30px",
  jumbo: "40px",
  superJumbo: "50px",
  massive: "70px",

  a4: {
    width: "1150px",
    height: "1700px",
    scaledHeight: "1350px",
  },

  icon: {
    xs: "16px",
    s: "24px",
    m: "32px",
    l: "48px",
    xl: "64px",
  },

  full: "100%",
  half: "50%",
  quarter: "25%",
  auto: "auto",
};

const headerHeight = "80px";

const depth = {
  xs: "0.05",
  s: "0.1",
  m: "0.3",
  l: "0.5",
};

export { headerHeight, dimensions, depth, fromUnit };
