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
  CartQuantity,
  CartSection,
  CartTitle,
  CartTotal,
  CartTotalItem,
  CheckoutButton,
  DeliveryFee,
  SubTitle,
  SubTotal,
} from "./Cart.styled";

const Cart = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);
    const subTotal = cart?.reduce((acc, crr) => acc + crr.price, 0);
    const deliveryFee = 50 
    const total = subTotal + deliveryFee

  return (
    <>
      <Navbar />
      <Container>
        <CartSection>
          {/* cart item */}
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
          </CartItem>
          {/* cart total */}
          <CartTotal>
            <CartTotalItem>Cart Total</CartTotalItem>
            <SubTotal>
              <SubTitle>SUBTOTAL</SubTitle>
              <CartPrice>${subTotal}</CartPrice>
                      </SubTotal>
                      <SubTotal>
              <SubTitle>Delivery Fee</SubTitle>
              <CartPrice>${deliveryFee}</CartPrice>
                      </SubTotal>
                      <SubTotal>
              <SubTitle>TOTAL</SubTitle>
              <CartPrice>${total}</CartPrice>
            </SubTotal>
             <CheckoutButton>Procced To Checkout</CheckoutButton>
          </CartTotal>
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
