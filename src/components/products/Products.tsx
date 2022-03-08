import React, { useEffect, useState } from "react";
import { IProduct } from "../../services/Type";
import ProductService from "../../services/ProductService";
import { ProductSection, ProductHeading, ProductRow } from "./Products";
import ProductCard from "../../components/common/card/ProductCard.tsx";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  useEffect(() => {
    ProductService.getProduct().then((res) => setProducts(res));
  }, []);

  return (
    <ProductSection>
      <ProductHeading>Latest Bike</ProductHeading>
      <ProductRow>
        {products?.map((pd) => (
          <ProductCard key={pd.id} pd={pd}></ProductCard>
        ))}
      </ProductRow>
    </ProductSection>
  );
};

export default Products;
