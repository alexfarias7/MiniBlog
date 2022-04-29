import styled, { createGlobalStyle } from 'styled-components';

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
    margin-bottom: 1em;
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

button[disabled]{
    background-color: #aaa;
}

.container .error{
    color:#721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
}
`;

export const MsgError = styled.div`
  margin-top: 1em;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 5px;
  border-radius: 5px;
`;

export const Btn = styled.button`
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;

  &:hover {
    background-color: #0f730c;
    color: #fff;
  }
`;

export const BtnDark = styled(Btn)`
  background-color: #000;
  border-radius: 0;
`;
export const BtnOutline = styled(Btn)`
  background-color: transparent;
  border-radius: 0;
  border: 1px solid #000;
  padding: 7px 30px;

  &:hover {
    background-color: #000;
  }
`;
export const BtnDanger = styled(Btn)`
  &:hover {
    background-color: #dc3545;
  }
`;
export default GlobalStyles;
