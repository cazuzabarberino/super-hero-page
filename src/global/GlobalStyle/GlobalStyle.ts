import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
    }
    
    html, body, #root {
        height: 100%
    }

`
