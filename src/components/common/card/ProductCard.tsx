import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IProduct } from "../../../services/Type";
import {
  ProductCards,
  CardHeader,
  Image,
  CardSubHeader,
  SubHeading,
  CardIcon,
  CardBody,
  ProductReview,
  ProductTitle,
  ProductPrice,
  DiscountPrice,
  AddToCardIcon,
} from "./ProductCard.styles";

interface IProps {
  pd: IProduct;
}

const ProductCard = ({ pd }:IProps)  => {
  const {title,price,id} = pd
  return (
    <ProductCards>
      <CardHeader>
        <Image src="https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/494X300/tvs-jupiter5e98386b0a37b.jpg?imwidth=400&impolicy=resize"></Image>
        <CardSubHeader>
          <AddToCardIcon>
            <CardIcon>
              {" "}
              <FaCartPlus />
            </CardIcon>
          </AddToCardIcon>
          <SubHeading>On Sale!</SubHeading>
        </CardSubHeader>
      </CardHeader>
      <CardBody>
        <ProductReview>
          <FaStar />
          <FaStar />
          <FaStar />
        </ProductReview>
        <ProductTitle to={`/product/${id}`}>{ title}</ProductTitle>
        <ProductPrice>
          <DiscountPrice>30 </DiscountPrice>
          {price}
        </ProductPrice>
      </CardBody>
    </ProductCards>
  );
};

export default ProductCard;
