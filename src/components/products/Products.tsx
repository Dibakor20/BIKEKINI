import React from "react";
import { IProduct } from "../../services/Type";
import ProductService from "../../services/ProductService";
import  ProductCard  from "../../components/common/card/ProductCard";
import { ProductSection, ProductHeading, ProductRow } from "./Products.styles";
import UseAsync from "../../hook/UseAsync";
import { Container } from "GlobalStyled";

const Products = (): React.ReactElement <any> => {
  const { data, isLoading } = UseAsync(ProductService.getProduct);
 
  return (
    <ProductSection>
      <Container>
      <ProductHeading>Latest Bike</ProductHeading>
      <ProductRow>
        {isLoading && <>Loading...</>}
        {!isLoading &&
          data
            ?.slice(0, 10)
            .map((pd: IProduct) => (
              <ProductCard key={pd.id} pd={pd}></ProductCard>
            ))}
        </ProductRow>
        </Container>
    </ProductSection>
  );
};

export default Products;
