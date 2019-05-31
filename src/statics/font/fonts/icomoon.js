import { createGlobalStyle } from "styled-components"
createGlobalStyle `
  @font-face {
  font-family: 'icomoon';
  src:  url('./fonts/icomoon.eot?dda5t9');
  src:  url('./fonts/icomoon.eot?dda5t9#iefix') format('embedded-opentype'),
    url('./fonts/icomoon.ttf?dda5t9') format('truetype'),
    url('./fonts/icomoon.woff?dda5t9') format('woff'),
    url('./fonts/icomoon.svg?dda5t9#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-cart:before {
  content: "e93a";
}

`