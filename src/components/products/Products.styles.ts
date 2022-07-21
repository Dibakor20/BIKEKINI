import styled from "styled-components";

export const ProductSection = styled.div`
  margin: 60px 0px;
`;
export const ProductHeading = styled.h3`
  padding: 40px 0px;
  color: #000;
  font-size: 24px;
`;
export const ProductRow = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  @media screen and (max-width:700px) {
  grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width:450px) {
  grid-template-columns: repeat(1, 1fr);
  }
`;
