import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BtnSearch = styled(Link)`
  margin-top: 1em;
  text-align: center;
  cursor: pointer;
  width: 120px;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  font-size: 1em;
  background-color: #000;
  border-radius: 0;
&:hover{
    background-color: #808080;
    color:#000;
    transition: 0.5s;
}
`;

export const MsgP = styled.p`
margin-bottom: 1em;
`
export const SearchContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

& h2{
    margin-bottom: 1em;
}

& p{
    margin-bottom: 30px;
}
`
export const NoPost = styled.div`
text-align: center;

`