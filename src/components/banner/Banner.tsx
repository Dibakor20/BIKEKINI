import { Container } from "GlobalStyled";
import React from "react";
import {
  BannerElement,
  BannerSection,
  BannerTitle,
  BikeFilter,
  BikeFilterElement,
  BrandButton,
  FilterButton,
  PriceButton,
  Select,
} from "./Banner.styled";

const Banner = () => {
  return (
    <>
      <BannerSection>
        <Container>
          <BannerElement>
            <BannerTitle>
              Buying your dream
              <br />
              bikes? Check Now!
            </BannerTitle>
          </BannerElement>
          <BikeFilter>
            <BrandButton>BY BRAND</BrandButton>
            <PriceButton>BY PRICE</PriceButton>
          </BikeFilter>
          <BikeFilterElement>
            <Select>
              <option value="" hidden>
                Select Brand
              </option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
            </Select>

            <Select>
              <option value="" hidden>
                Select Model
              </option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
                      </Select>
                      <FilterButton>SEARCH</FilterButton>
          </BikeFilterElement>
        </Container>
      </BannerSection>
    </>
  );
};

export default Banner;
