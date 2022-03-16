import React, { useCallback } from "react";
import Navbar from "components/common/navbar/Navbar";
import { useParams } from "react-router-dom";
import UseAsync from "hook/UseAsync";
import ProductService from "services/ProductService";

const ProductDetails = () => {
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
      {isSuccess && <> {title}</>}
      {isError && <h3>{error}</h3>}
    </>
  );
};

export default ProductDetails;
