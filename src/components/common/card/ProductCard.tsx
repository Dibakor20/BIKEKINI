import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";

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
} from "./ProductCard";

const ProductCard = () => {
  return (
    <ProductCards>
      <CardHeader>
        <Image src="https://i.ibb.co/KWCpqXW/product-pic-1.jpg"></Image>
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
        <ProductTitle to="/">Computer</ProductTitle>
        <ProductPrice>
          <DiscountPrice>30</DiscountPrice>
          300
        </ProductPrice>
      </CardBody>
    </ProductCards>
  );
};

export default ProductCard;
