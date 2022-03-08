import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCards = styled.div`
  border: 1px solid #e6e4e4;
  border-radius: 5px;
  transition: 0.3s;
  height: 320px;
`;
export const CardHeader = styled.div`
  position: relative;
  height: 200px;
`;
export const Image = styled.img`
  width: 100%;
  height: 140px;
  margin-top: 40px;
`;
export const CardSubHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;
export const AddToCardButton = styled.button`
  border: none;
  margin: 0 5px;
  background-color: #222;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition-duration: 0.6s;
`;
export const CardIcon = styled.span`
  color: #ffd21d;
  font-size: 18px;
`;
export const SubHeading = styled.p`
  font-size: 11px;
  margin-top: 20px;
  color: #fa0000;
  font-weight: 700;
  padding-right: 20px;
`;
export const CardBody = styled.div`
  text-align: center;
  padding: 10px 0px;
`;
export const ProductReview = styled.div`
  padding: 0 0 15px;
  color: #ffd21d;
  font-size: 11px;
`;
export const ProductTitle = styled(Link)`
  padding: 5px 0;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #888;
`;
export const ProductPrice = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #222;
`;
export const DiscountPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-weight: 300;
  padding: 3px;
`;
