/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'vue-styled-components';

injectGlobal`
  * {
    border: 0;
    margin: 0;
    outline: none;
    padding: 0;

    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    background-color: #282828;
    color: #383838;
    font-family: sans-serif;
    font-size: 100%;
  }
`;
