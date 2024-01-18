import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme['primary-dark']};
  }

  body, input, button {
    font-family: Open Sans, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme['high-pure']};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(.90);
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
