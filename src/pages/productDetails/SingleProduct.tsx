import React, { useCallback } from "react";
import Navbar from "components/common/navbar/Navbar";
import { useParams } from "react-router-dom";
import UseAsync from "hook/UseAsync";
import ProductService from "services/ProductService";
import { IProduct } from "services/Type";
import { Container } from "GlobalStyled";
import {
  FaStar,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  AddToCartButton,
  AddToCartSection,
  DecreaseButton,
  IncreaseButton,
  ItemNumber,
  PdCounter,
  PdDescription,
  PdDiscountPrice,
  PdMainPrice,
  PdReview,
  PdTitle,
  PriceView,
  Product,
  ProductContent,
  ProductImg,
  ProductView,
  ReviewCount,
  SingleProductSection,
  SocialLiIcon,
  SocialLink,
  SocialShare,
  SocialUlIcon,
} from "./SingleProduct.styled";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actionCreator/CartActionCreator";

const SingleProduct = () => {
  const { id } = useParams();
  const getProduct = useCallback(() => {
    return ProductService.getProductById(id as string);
  }, [id]);

  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError, error } = UseAsync(getProduct);
  const { title, description, price } = data || {};
  return (
    <>
      <Navbar />
      {isLoading && <>Loading...</>}
      {isSuccess && (
        <>
          <SingleProductSection>
            <Container>
              <Product>
                <ProductImg src="https://i.ibb.co/LJZtjRh/product-pic-3.jpg" />
                <ProductContent>
                  <PdTitle>{title}</PdTitle>
                  <ProductView>
                    <PriceView>
                      <PdDiscountPrice>$ 100</PdDiscountPrice>
                      <PdMainPrice>${price}</PdMainPrice>
                    </PriceView>
                    <PdReview>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <ReviewCount>(34 Reviews)</ReviewCount>
                    </PdReview>
                  </ProductView>
                  <PdDescription>{description}</PdDescription>
                  <AddToCartSection>
                    <PdCounter>
                      <IncreaseButton>
                        <AiOutlinePlus />
                      </IncreaseButton>
                      <ItemNumber>5</ItemNumber>
                      <DecreaseButton>
                        <AiOutlineMinus />
                      </DecreaseButton>
                    </PdCounter>
                    <AddToCartButton
                      onClick={() =>dispatch(addToCart(data as IProduct))}
                    >
                      Add To Cart
                    </AddToCartButton>
                  </AddToCartSection>

                  {/* Social share Icon */}

                  <SocialShare>
                    <SocialUlIcon>
                      <SocialLiIcon>
                        <SocialLink>
                          <FaFacebookF />
                        </SocialLink>
                      </SocialLiIcon>

                      <SocialLiIcon>
                        <SocialLink>
                          <FaInstagram />
                        </SocialLink>
                      </SocialLiIcon>

                      <SocialLiIcon>
                        <SocialLink>
                          <FaTwitter />
                        </SocialLink>
                      </SocialLiIcon>

                      <SocialLiIcon>
                        <SocialLink>
                          <FaGooglePlusG />
                        </SocialLink>
                      </SocialLiIcon>
                    </SocialUlIcon>
                  </SocialShare>
                </ProductContent>
              </Product>
            </Container>
          </SingleProductSection>
        </>
      )}
      {isError && <>{error}</>}
    </>
  );
};

export default SingleProduct;
