import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      background: ${theme.colors.background};
      font-family: ${theme.font.family};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.regular};
      line-height: 1.5;
    }
    input,
    textarea,
    button {
      font: 500 ${theme.font.sizes.small} ${theme.font.family};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.black};
    }
    button {
      cursor: pointer;
    }
    ul,
    ol {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    [disabled],
    [readonly] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`;

export default GlobalStyles;
