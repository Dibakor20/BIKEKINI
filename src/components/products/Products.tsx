import React, { useEffect, useState } from "react";
import { IProduct } from "../../services/Type";
import ProductService from "../../services/ProductService";
import ProductCard from "../../components/common/card/ProductCard.tsx";
import { ProductSection, ProductHeading, ProductRow } from "./Products";
import UseAsync from "../../hook/UseAsync";

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}
const Products = () => {
  const { data, isLoading } = UseAsync(ProductService.getProduct);

  return (
    <ProductSection>
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
    </ProductSection>
  );
};

export default Products;
