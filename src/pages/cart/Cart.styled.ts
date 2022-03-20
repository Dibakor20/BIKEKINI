import styled from "styled-components";

export const CartSection = styled.div`
    margin-top: 80px; 
    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-gap: 30px;
`
export const CartItem = styled.div`
   
`
export const CartProduct = styled.div`
    width: 100%;
    padding: 15px 10px;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const CartContent = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
`

export const CartImg = styled.img`
    width: 80px;
    height: 80px;
`

export const CartTitle = styled.h3`
    font-size: 18px;
    justify-content: center;
    align-items: center;
    padding: 0px        20px;
`
export const CartQuantity = styled.p`
`
export const CartPrice = styled.h5`
    font-size: 15px;
    display: flex;
    align-items: center;
`
export const CartTotalItem = styled.div`
  
`

export const CartTotal = styled.div`
    padding: 20px 10px; 
    border: 1px solid #eee;
    height: 240px;
`
export const SubTotal = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
`
export const SubTitle = styled.h3`
    padding: 0px 0px;
    font-size: 15px;
`
export const DeliveryFee = styled.h5`

`
export const CheckoutButton = styled.button`
margin-top: 30px !important;
    padding: 10px 40px;
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
    letter-spacing: .3px;
    cursor: pointer;
    background-color:#252525;
    border-color: gray;
    display: block;
    margin: 0 auto;
`
