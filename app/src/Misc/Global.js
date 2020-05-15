import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
html{
  font-size:100%;

}
body {
    margin: 0;
  }

  canvas {
    display: block;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

<<<<<<< HEAD:app/src/Misc/Global.js
  input[type=number] {
    -moz-appearance: textfield;
=======
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
>>>>>>> master:app/src/components/Global.js
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

`;
