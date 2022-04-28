import styled, {css} from "styled-components";

export const Wrapper = styled.div`

${({theme})=>css`
background-color: ${theme.colors.secondaryColor};
`}
`
export const Container = styled.div`
  min-height: 60vh;
  margin: 5em;
`;
