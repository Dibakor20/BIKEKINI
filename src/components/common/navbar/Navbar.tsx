import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, MobileIcon } from "./Navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo to="/">
        BIKE<span>KINI</span>
      </Logo>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </MobileIcon>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">Latest Bikes</MenuLink>
        <MenuLink to="/">Popular Bikes</MenuLink>
        <MenuLink to="/">Blog</MenuLink>
        <MenuLink to="/">Delivery</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
