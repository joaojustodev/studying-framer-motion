import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --header-height: 56px;
  }

  *,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: #F6F6F6;
    color: #242424;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }

  a {
    text-decoration: none;
    color: unset;
  }



  /* UTILITIS CLASSES */

  .container {
    width: 100%;
    max-width: 1126px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
