import { createGlobalStyle, css } from 'styled-components'
import { theme } from './theme'


const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   ${({theme})=>css`
   background: ${theme.colors.mainColor}
   `}

}
`

export default GlobalStyles