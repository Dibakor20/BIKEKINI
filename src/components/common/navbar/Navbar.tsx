import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, MobileIcon } from "./Navbar.styles";
import { FaCartPlus } from "react-icons/fa";
import { IProduct } from "services/Type";
import { Container } from "GlobalStyled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </MobileIcon>
      <Container>
        <Menu isOpen={isOpen}>
          <MenuLink to="/">HOME</MenuLink>
          <MenuLink to="/">BIKES</MenuLink>
          <MenuLink to="/">HELMET</MenuLink>
          <MenuLink to="/">HONDA</MenuLink>
          <MenuLink to="/">SHOWROOMS</MenuLink>
          <MenuLink to="/">BRANDS</MenuLink>
          <MenuLink to="/">SCOOTER</MenuLink>
          <MenuLink to="/">UPCOMMING</MenuLink>
          <MenuLink to="/">BLOG</MenuLink>
          <MenuLink to="/">OTHERS</MenuLink>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;
