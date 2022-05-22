import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;

    --green: #32B768;
    --green-dark: #2B7A4B;
    --green-light: #DAF2E4;

    --gray: #CFCFCF;
    --gray-dark: #52665A;
    --gray-light: #F0F0F0;
  }

  html {
      font-family: Roboto, sans-serif;
      background: var(--white);
      color: var(--gray);
  }

  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
      margin: 0;
      padding: 0
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-size: 100%;
      font-weight: 400
  }

  ul {
      list-style: none
  }

  button,
  input,
  select,
  textarea {
      margin: 0;
      padding: 0;
      font-family: Roboto, sans-serif
  }

  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box
  }

  img, video {
      height: auto;
      max-width: 100%
  }

  iframe {
      border: 0
  }

  a, button {
      cursor: pointer
  }

  a, a:hover {
      text-decoration: none
  }

  @media (min-width: 320px) {
      :root {
          --font-text:15px
      }
  }

  @media (min-width: 576px) {
      :root {
          --font-text:16px
      }
  }
`;
