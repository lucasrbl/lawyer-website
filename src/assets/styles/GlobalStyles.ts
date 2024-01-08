import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bar-width: 60px;
    --bar-heigth: 8px;
    --hamburguer-gap: 6px;
    --foreground: #333;
    --background: #FFF;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
  }

  h2 {
    font-family: 'Abel', sans-serif;
  }

  p, a, span, input, label, textarea {
    font-family: 'Inter', sans-serif;
  }
`;