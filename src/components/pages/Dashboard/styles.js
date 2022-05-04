import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Dashboard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  & h2 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }

  & p {
    color: #000;
    margin-bottom: 1em;
  }
`;

export const BtnDasboard = styled(Link)`
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

export const NoPost = styled.div`
  text-align: center;

  & p {
    margin-bottom: 1.5em;
  }

  & a {
    padding: 10px 25px;
  }
`;

export const LinkOutline = styled(Link)`
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
  font-size: 1em;
  
  &:hover {
    background-color: #90ee90;
    color: #fff;
  }
`;
export const LinkOutlineEdit = styled(Link)`
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
  font-size: 1em;

  &:hover {
    background-color: #e5e619;
    color: #fff;
  }
`;

export const BtnDangerDashboard = styled.button`
  background-color: transparent;
  
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  border: 1px solid #000;
  padding: 7px 30px;
  font-size: 1em;
  color: #000;
  &:hover {
    background-color: #dc3545;
    color: #fff;
  }
`;

export const PostHeader =styled.div`
display:flex;
justify-content: space-between;
font-weight: bold;
border-bottom: 2px solid #ccc;
width: 80%;
padding: 10px;
`

export const PostRow = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  width: 80%;
  padding: 10px;

  & p{
    color: #000;
  }

  & button, & a {
    margin: 0 5px;
  height: 30px;
  width: 100px;
  font-size: 0.7em;
 
  }
`

