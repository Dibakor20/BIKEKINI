import { Container } from "GlobalStyled";
import React from "react";
import {
  BikeLogo,
  HeaderLogo,
  HeaderSection,
  SearchButton,
  SearchCointainer,
  SearchIcon,
  SearchInput,
  HeaderIcon,
  HeaderAdds,
} from "./Header.styled";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderSection>
          <HeaderLogo>
            <BikeLogo src="https://bd.gaadicdn.com/pwa/img/bd-logo.svg" />
          </HeaderLogo>
          <SearchCointainer>
            <SearchInput placeholder="Search Bikes or Scooters" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchCointainer>
                  <HeaderIcon>
                      <HeaderAdds src="https://adserver.bikebd.com/storage/app/files/1/2022/BikeBD%20728x90%20honda%20may%202022.webp"/>
          </HeaderIcon>
        </HeaderSection>
      </Container>
    </>
  );
};

export default Header;
