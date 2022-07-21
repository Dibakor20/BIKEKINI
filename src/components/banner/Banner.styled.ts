import styled from "styled-components";

export const BannerSection = styled.div`
  background-image: url(https://bd.gaadicdn.com/pwa/img/Dream-Bike.jpg);
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const BannerElement = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
`;
export const BannerTitle = styled.h1`
  font-size: 42px;
  color: #24272c;
  @media screen and (max-width:1000px) {
    font-size: 32px;
  }
`;
export const BikeFilter = styled.div`
  display: flex;
`;
export const BrandButton = styled.button`
  background-color: #d02f2f;
  border-radius: 4px;
  border-radius: 4px 4px 0 0;
  color: #fff;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
  margin-right: 4px;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  vertical-align: bottom;
  width: 106px;
  border: none;
  cursor: pointer;

  &:active{
    background: #fff;
    color: #24272c;
    height: 37px;
    line-height: 38px;
    width: 112px;
  }
`;
export const PriceButton = styled.button`
  background-color: #d02f2f;
  border-radius: 4px;
  border-radius: 4px 4px 0 0;
  color: #fff;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
  margin-right: 4px;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  vertical-align: bottom;
  width: 106px;
  border: none;
  cursor: pointer;
`;
export const BikeFilterElement = styled.div`
  z-index: 999;
  display: flex;
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: #fff;
  box-shadow: 0 8px 20px 0 rgb(36 39 44 / 15%);
  max-width: 650px;
  border-radius: 8px;
`;
export const Select = styled.select`
  width: 40%;
  height: 48px;
  background: #fff;
  border-bottom: none;
  border-right: 1px solid rgba(36, 39, 44, 0.15) !important;
  line-height: inherit;
  font-size: 14px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FilterButton = styled.button`
  background: #d02f2f;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 48px;
  max-width: 160px;
  text-align: center;
  width: 100%;

  @media screen and (max-width:500px) {
    max-width: 60px;
    font-size: 12px;
  }
`;
