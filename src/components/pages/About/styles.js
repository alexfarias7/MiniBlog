import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const About = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    color: #aaa;
    margin: 2em ;
  }

`;

export const BtnAbout = styled(Link)`
  background-color: #1a8918;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 130px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
  display: block;
  margin-top: 15px;
  padding: 10px 15px;
`;
