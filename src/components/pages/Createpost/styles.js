import styled from 'styled-components';
import { Btn , MsgError } from '../../../styles/global';


export const CreatePost = styled.div`
  text-align: center;
  & h2 {
    font-size: 2.2em;
  }
  & p {
    color: #aaa;
    margin: 2em;
  }
`;

export const BtnCreatePost = styled(Btn)``;

export const BtnError = styled(MsgError)``;
