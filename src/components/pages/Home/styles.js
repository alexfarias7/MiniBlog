import styled from 'styled-components';

import {Link} from 'react-router-dom'

import { BtnDark } from '../../../styles/global';

export const BtnDarkHome = styled(BtnDark)`

&:hover{
    background-color: #fefefe;
    color:#000;
    transition: 0.5s;
}
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
      margin-bottom: 1em;
  }
`;

export const SearchForm = styled.form`
   max-width: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  & input {
  margin-right: 10px;
  width: 50%;
  }

 
  
`

export const NoPost = styled.div`
  text-align: center;

  & p {
    margin-bottom: 1.5em;
  }

  & a {
    padding: 10px 25px;
  }
`;

 export const BtnLink = styled(Link)`
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
 `