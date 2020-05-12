import { css } from 'styled-components';

export default css`
  html,
  * {
    font-family: Heebo, sans-serif;
    letter-spacing: 0.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 0px;
  }

  body,
  #root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  body.no-scroll {
    overflow: hidden;
  }
  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
