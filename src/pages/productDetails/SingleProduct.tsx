import React, { useCallback } from "react";
import Navbar from "components/common/navbar/Navbar";
import { useParams } from "react-router-dom";
import UseAsync from "hook/UseAsync";
import ProductService from "services/ProductService";
import { IProduct } from "services/Type";
import { Container } from "GlobalStyled";
import { PdDiscountPrice, PdTitle, PriceView, Product, ProductContent, ProductImg, ProductView, SingleProductSection } from "./SingleProduct.styled";


const SingleProduct = () => {
  const { id } = useParams();
  const getProduct = useCallback(() => {
    return ProductService.getProductById(id as string);
  }, [id]);

  const { data, isLoading, isSuccess, isError, error } = UseAsync(getProduct);
  const { title, description, price } = data || {};
  return (
    <>
      <Navbar />
      {isLoading && <h3>Loading...</h3>}
      {isSuccess && <>
        <SingleProductSection>
          <Container>
            <Product>
              <ProductImg src="https://i.ibb.co/LJZtjRh/product-pic-3.jpg" />
              <ProductContent>
                <PdTitle>{title}</PdTitle>
                <ProductView>
                  <PriceView>
                    <PdDiscountPrice>100</PdDiscountPrice>
                  </PriceView>
                </ProductView>
              </ProductContent>
            </Product>
          </Container>
        </SingleProductSection>
      </>}
      {isError && <h3>{error}</h3>}
    </>
  );
};

export default SingleProduct;
