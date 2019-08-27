export const base = ({ colors }) => `

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:after,
  *:before {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    height: 100%;
  }

  body {
    color: ${colors.textPrimary};
    background-color: ${colors.backgroundPrimary};
  }

  #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;
