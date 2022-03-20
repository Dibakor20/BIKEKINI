import { ProductTitle } from "components/common/card/ProductCard.styles";
import Navbar from "components/common/navbar/Navbar";
import { Container } from "GlobalStyled";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "redux/store";
import { IProduct } from "services/Type";
import {
  CartContent,
  CartImg,
  CartItem,
  CartPrice,
  CartProduct,
  CartSection,
  CartTitle,
  CartTotal,
  CartTotalItem,
  SubTitle,
  SubTotal,
} from "./Cart.styled";

const Cart = () => {
    const cart: IProduct[] = useSelector((state: AppState) => state.cart);
    
    // const subTotal = cart.reduce((_prev, _curr) => {
        
    // },0)

  return (
    <>
      <Navbar />
      <Container>
        <CartSection>
          <CartItem>
            {cart.map((item) => (
              <>
                <CartProduct>
                  <CartContent>
                    <CartImg src="https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/494X300/tvs-jupiter5e98386b0a37b.jpg?imwidth=400&impolicy=resize"></CartImg>
                    <CartTitle>{item?.title}</CartTitle>
                  </CartContent>
                  <CartPrice>{item?.price}</CartPrice>
                </CartProduct>
              </>
            ))}

            <CartTotal>
                          <CartTotalItem>Cart Total</CartTotalItem>
                          <SubTotal>
                              <SubTitle>SUBTITLE</SubTitle>
                              <CartPrice>$300</CartPrice>
                          </SubTotal>
            </CartTotal>
          </CartItem>
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
