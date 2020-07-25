import { createGlobalStyle } from "styled-components"
import { QUERIES } from "./styles"

const GlobalStyles = createGlobalStyle`
    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ${"" /* border: 1px solid black; */}
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
