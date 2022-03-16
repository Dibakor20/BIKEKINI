import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IProduct } from "../../../services/Type";
import {
  ProductCards,
  CardHeader,
  Image,
  CardSubHeader,
  AddToCardButton,
  SubHeading,
  CardIcon,
  CardBody,
  ProductReview,
  ProductTitle,
  ProductPrice,
  DiscountPrice,
} from "./ProductCard.styles";

interface IProps {
  pd: IProduct;
}

const ProductCard = ({ pd }:IProps)  => {
  const {title,price} = pd
  return (
    <ProductCards>
      <CardHeader>
        <Image src="https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/494X300/tvs-jupiter5e98386b0a37b.jpg?imwidth=400&impolicy=resize"></Image>
        <CardSubHeader>
          <AddToCardButton>
            <CardIcon>
              {" "}
              <FaCartPlus />
            </CardIcon>
          </AddToCardButton>
          <SubHeading>On Sale!</SubHeading>
        </CardSubHeader>
      </CardHeader>
      <CardBody>
        <ProductReview>
          <FaStar />
          <FaStar />
          <FaStar />
        </ProductReview>
        <ProductTitle to="/">{ title}</ProductTitle>
        <ProductPrice>
          <DiscountPrice>30 </DiscountPrice>
          {price}
        </ProductPrice>
      </CardBody>
    </ProductCards>
  );
};

export default ProductCard;
