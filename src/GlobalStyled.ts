import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box ;
    margin:0 !important ;
    padding:0 !important;
}
`;
export const Container = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
