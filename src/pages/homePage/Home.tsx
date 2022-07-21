/* eslint-disable react/jsx-no-undef */
import AddOne from "components/addvertisement/AddOne";
import Banner from "components/banner/Banner";
import Header from "components/common/header/Header";
import React from "react";
import Navbar  from '../../components/common/navbar/Navbar'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <>
      <Header/>
      <Navbar />
      <Banner />
      <AddOne/>
      <Products/>
    </>
  );
};

export default Home;
