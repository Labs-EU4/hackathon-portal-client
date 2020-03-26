import { createGlobalStyle } from "styled-components";

import bg from '../images/Matrix-bg.jpg';

export const GlobalStyles = createGlobalStyle`
  /*MEYER RESET*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }

  /* make sure to set some focus styles for accessibility */
  :focus {
      outline: 0;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }

  body {
      line-height: 1;
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
      -webkit-appearance: none;
      -moz-appearance: none;
  }

  input[type=search] {
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
  }

  textarea {
      overflow: auto;
      vertical-align: top;
      resize: vertical;
  }

  audio,
  canvas,
  video {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      max-width: 100%;
  }

  audio:not([controls]) {
      display: none;
      height: 0;
  }

  [hidden] {
      display: none;
  }

  html {
      font-size: 100%; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      -ms-text-size-adjust: 100%; /* 2 */
  }

  a {
      -webkit-tap-highlight-color: transparent;
  }

  a:focus {
      outline: none;
  }

  a:active,
  a:hover {
      outline: 0;
  }

  img {
      border: 0; /* 1 */
      -ms-interpolation-mode: bicubic; /* 2 */
  }

  figure {
      margin: 0;
  }

  form {
      margin: 0;
  }

  fieldset {
      border: 1px solid #c0c0c0;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
  }

  legend {
      border: 0; /* 1 */
      padding: 0;
      white-space: normal; /* 2 */
      *margin-left: -7px; /* 3 */
  }

  button,
  input,
  select,
  textarea {
      font-size: 100%; /* 1 */
      margin: 0; /* 2 */
      vertical-align: baseline; /* 3 */
      *vertical-align: middle; /* 3 */
  }

  button,
  input {
      line-height: normal;
      -webkit-tap-highlight-color: transparent;
  }

  button,
  select {
      text-transform: none;
  }

  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
      -webkit-appearance: button; /* 2 */
      cursor: pointer; /* 3 */
      *overflow: visible;  /* 4 */
  }

  button[disabled],
  html input[disabled] {
      cursor: default;
  }

  input[type="checkbox"],
  input[type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
      *height: 13px; /* 3 */
      *width: 13px; /* 3 */
  }

  input[type="search"] {
      -webkit-appearance: textfield; /* 1 */
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box; /* 2 */
      box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
      border: 0px;
      padding: 0px;
      outline: 0px !important;
  }

  textarea {
      overflow: auto; /* 1 */
      vertical-align: top; /* 2 */
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  html,
  button,
  input,
  select,
  textarea {
      color: #222;
  }

  ::-moz-selection {
      background: #b3d4fc;
      text-shadow: none;
  }

  ::selection {
      background: #b3d4fc;
      text-shadow: none;
  }

  img {
      vertical-align: middle;
  }

  fieldset {
      border: 0;
      margin: 0;
      padding: 0;
  }

  textarea {
      resize: vertical;
  }

  .chromeframe {
      margin: 0.2em 0;
      background: #ccc;
      color: #000;
      padding: 0.2em 0;
  }

  /* Others ... */
  *, *::before, *::after {
      box-sizing: border-box;
  }

  :root {
      @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
      font-family: 'Orbitron', sans-serif !important;
      font-size: 62.5%;
      font-size: 57.5%;
      scroll-behavior: smooth;
      line-height: normal;
      --app-background: rgba(15,15,15,0.925);
      --app-text-color: #fff;
      --dash-side-margin: 20px;
      --app-padding: 21px;
      --border-radius: 5px;
      --border-color: rgba(255,255,255,.15);
      --border-color-low: rgba(255,255,255,.09);
      --header-height: 47px;
      --app-dropdown-bg: rgb(51,51,51);
      --app-message-bg: rgba(255,255,255,0.2);
      --icon-color: #fff;
      --a-show-full-duration: 0.3s;
      --a-show-full-curve: ease-out;
      --a-curve: ease;
      --a-fast: 0.15s;
      --a-default: all var(--a-fast) var(--a-curve);
  }

  body {
      max-width: 100vw;
      overflow: hidden;
      text-rendering: optimizeLegibility;
      font-weight: bold;
      -webkit-font-smoothing: antialiased;
      text-shadow: 0 1px 5px rgba(0,0,0,.1);
      line-height: 1.2;
      color: black;
      background-image: url(${bg}), linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);
      
      .dashboard-bg {
          height: 105vh;
          border: 3px solid red;
      }
  }

  .particles {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
  }
`;
