import { createGlobalStyle } from "styled-components"
import { QUERIES } from "./styles"

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

        @media(${QUERIES.small}) {
            font-size: 58%;
                    }
    }

    body {
        font-weight: 400;
    }  
`

export default GlobalStyles
