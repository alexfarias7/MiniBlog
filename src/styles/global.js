import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
   /*  font-size: 62.5%; */
}

body{
    background: ${({ theme }) => theme.colors.mainColor};
    font-family: ${({ theme }) => theme.fonts.family.mainFont};

}

input::placeholder, textarea::placeholder{
    font-family: ${({ theme }) => theme.fonts.family.mainFont};
    color: #aaa;
}

input:focus, textarea:focus{
    outline: none;
}

a, nav button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: #000;
    transition: 0.4s;
    font-size:1em;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.family.mainFont};
}

a:hover, nav button:hover{
    color: #bbb;
}

/*form styles  */
form {
    max-width: 40%;
    margin: 0 auto;
}
label{
    display: flex;
    flex-direction: column;
    margin-bottom: 1px;
}

label span {
    margin-bottom: 0.3em;
    font-weight: bold;
    text-align: left;
}

input-security, textarea{
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.8em 0;
    background-color: transparent;
}
`;



export default GlobalStyles;
