import styled from "styled-components";

import {Link} from 'react-router-dom'

export const BtnOutline = styled(Link)`
 background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid #000;
  padding: 7px 30px;
 
 &:hover {
    background-color: #dc3545;
  }
`

export const PostDetails = styled.div`
margin-bottom: 2em;

& img {
    max-width: 600px;
}

& h2 {
    margin-bottom: 0.4em;
}

& .tags{
    margin-bottom:1.2em;
    display: flex;
}
`

export const Tags = styled.div`

& p{
    margin-right: .5em;
}

& span{
    font-weight: bold;
}
`
export const CreatedBy = styled.div`
font-style: italic;
color: #444;
font-size: 0.8;
margin-bottom: 1em;
`