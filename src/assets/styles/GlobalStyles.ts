import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
  }

  h2 {
    font-family: 'Abel', sans-serif;
  }

  p, span, input, label, textarea {
    font-family: 'Inter', sans-serif;
  }
`;