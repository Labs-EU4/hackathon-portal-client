import { createGlobalStyle } from 'styled-components';
// import {
//   baseFontSize,
//   h1FontSize,
//   h2FontSize,
//   h3FontSize,
//   h4FontSize,
//   Solid,
//   type,
// } from '../index';

import * as color from './variables/colors';

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
    /* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500i,700,900&display=swap'); */
    /* UBUNTU WAS A GOOD CHOICE ALSO */
    /* @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap'); */
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');
    font-size: 62.5%;
    font-size: 57.5%;
    /* font-family: 'Rubik', 'apple-system', 'Noto Sans', 'Ubuntu', 'Cantarell,', 'Segoe UI', 'Helvetica Neue'; 
    font-family: 'Noto Sans', 'apple-system', 'Rubik', 'Helvetica Neue', 'Segoe UI', sans-serif;
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Roboto', sans-serif; --> very good!!*/
    /* font-family: 'Ubuntu', sans-serif; */
    /* font-family: 'Dancing script', sans-serif;  */
    /* font-family: 'Oswald', sans-serif;  */
    /* font-family: 'Roboto', sans-serif; */
    /*font-family: 'Noto Sans JP', sans-serif; --> better!!*/
    /* font-family: 'Noto Sans TC', sans-serif; */
    /* font-family: 'Nunito Sans', sans-serif;  --> not bad!! */
    /* font-family: 'Montserrat', sans-serif;    */
    font-family: 'Roboto Condensed', sans-serif;
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
    /* text-transform: uppercase; */
    text-rendering: optimizeLegibility;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    text-shadow: 0 1px 5px rgba(0,0,0,.1);
    line-height: 1.2;
    color: ${props => props.theme.color.black};
    background: ${props => props.theme.color.white};

    .dashboard-bg {
        height: 105vh;
        border: 3px solid red;
    }
}

#root > div:first-child {
  display: flex;
  flex-direction: column;
  height: 100%; min-height: 100vh;
}

#root > div:first-child > div:nth-child(2) {
  flex: 2;
}

.particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
}



/* REUSABLE STYLES */

    /*BACKGROUNDS*/
    .carbon-bg {
        background:
            linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
            linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
            linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
            linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
            linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
            linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
        background-color: #131313;
        background-size: 20px 20px;
    }

    .rainbow-bg {
        background:
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,
            radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,
            linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);
        background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;
        background-color: #840b2a;
    }

    .starry-bg {
        background-color:black;
        background-image:
            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
            radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
        background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
        background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    }
`;

/*
DARK MODE
    .dark-mode {
        color: #fff;
        background-color: #02101f;
    }

    .dark-aside {
        background-color: #15202B;
        box-shadow: -1px 1px 5px rgba(64, 224, 208, .4), 2px -1px 3px rgba(64, 224, 208, .2);
    } */

/* h1 {
  font-size: ${h1FontSize};
}

h2 {
  font-size: ${h2FontSize};
}

h3 {
  font-size: ${h3FontSize};
}

h3 {
  font-size: ${h4FontSize};
} */