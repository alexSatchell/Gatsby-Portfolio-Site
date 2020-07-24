import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
    }

    body {
        font-family: 'Roboto';
        font-weight: 400;
    }  
`

export default GlobalStyles
