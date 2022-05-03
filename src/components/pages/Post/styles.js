import styled from "styled-components";

export const PostContainer = styled.div`
text-align: center;
& p{
    margin: 1em;
}
& h1{
    margin-top: 0.5em;
    margin-bottom: 1em;
}

& h3{
    margin: .5em;
}

& .tags{
    display: flex;
    justify-content: center;
}
`

export const Tags = styled.div`
& p{
    margin-right: 1em;
}

& span{
    
    font-weight: bold;
}
`