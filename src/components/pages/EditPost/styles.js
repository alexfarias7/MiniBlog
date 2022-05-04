import styled from 'styled-components';
import { Btn , MsgError } from '../../../styles/global';


export const EditPost = styled.div`
  text-align: center;
  & h2 {
    font-size: 2.2em;
  }
  & p {
    color: #aaa;
    margin: 2em;
  }

  & .preview_title{
      margin-bottom: 0.2em;
      color:#000;
      font-weight: bold  ;
  }
`;

export const ImgPreview = styled.img`
max-width: 80%;
margin-bottom: 1em;
`

export const BtnEditPost = styled(Btn)``;

export const BtnError = styled(MsgError)``;
