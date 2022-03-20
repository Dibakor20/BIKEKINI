import styled from "styled-components";

export const CartSection = styled.div`
    margin-top: 80px; 
`
export const CartItem = styled.div`
    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-gap: 30px;
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
`
export const SubTotal = styled.div`
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
`
export const SubTitle = styled.h3`
    padding: 10px 0px;
    font-size: 15px;
`
