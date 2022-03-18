import styled from "styled-components";

export const SingleProductSection = styled.div`
    padding: 80px 0px;
`
export const Product = styled.div`
    height: 500px;
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-gap: 25px;
`
export const ProductImg = styled.img`
    width: 100%;
    border: 1px solid #eee;
`
export const ProductContent = styled.div`
    margin-top: 25px;
`
export const PdTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
`
export const ProductView = styled.div`
    display: flex;
    justify-content: space-between;
`
export const PriceView = styled.div`

`
export const PdDiscountPrice = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: gray;
    text-decoration: line-through;
    line-height: 10px;
    margin-top: 20px;
`