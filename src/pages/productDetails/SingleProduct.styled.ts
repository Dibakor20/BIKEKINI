import styled from "styled-components";

export const SingleProductSection = styled.div`
  padding: 80px 0px;
`;
export const Product = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-gap: 25px;
`;
export const ProductImg = styled.img`
  width: 100%;
  border: 1px solid #eee;
`;
export const ProductContent = styled.div`
  margin-top: 25px;
`;
export const PdTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
export const ProductView = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PriceView = styled.div``;
export const PdDiscountPrice = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: gray;
  text-decoration: line-through;
  line-height: 10px;
  margin-top: 20px;
`;
export const PdMainPrice = styled.p`
  font-size: 30px;
  color: gray;
  font-weight: 500;
  margin-top: 10px;
`;
export const PdReview = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #ffd21d;
`;
export const ReviewCount = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
`;

export const PdDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    color: #878787;
    margin-top: 15px;
`
export const AddToCartSection = styled.div`
    margin: 20px 0;
    display: flex;
`
export const PdCounter = styled.div`
    border-radius: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    border: 1px solid #eee;
`
export const IncreaseButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`
export const ItemNumber = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin: 0;
`
export const DecreaseButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`
export const AddToCartButton = styled.button`
    padding: 10px 26px;
    line-height: 20px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .8px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .5s ease 0s;
    border: none;
    border-radius: 5px;
    background-color: #ffd21d;
    cursor: pointer;

    &:hover{
        color: #fff;
        background: #000;
    }
`
export const SocialShare = styled.div`
    margin-top: 20px;
`
export const SocialUlIcon = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`
export const SocialLiIcon = styled.li`
    list-style: none;
    padding: 10px 15px;
    border: 1px solid #eee;
    margin-right: 5px;
`
export const SocialLink = styled.a`
        text-decoration: none;
         color: #000;
         font-size: 20px;
`