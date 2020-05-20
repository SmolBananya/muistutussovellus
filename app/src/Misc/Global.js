import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
html{
  font-size:100%;

}
body {
    margin: 0;
    background-color:#fafafa;

  }

  canvas {
    display: block;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
#root {

}
`;
