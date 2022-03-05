import React, { useState } from 'react';
import {Nav,Logo,Hamburger,Menu,MenuLink} from '../navbar/Navbar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo to="/">
        Bazar<span>Kori</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Our Work</MenuLink>
        <MenuLink to="/">About</MenuLink>
        <MenuLink to="/">Careers</MenuLink>
        <MenuLink to="/">Contact</MenuLink>
        <MenuLink to="/">Careers</MenuLink>
        <MenuLink to="/">Contact</MenuLink>
      </Menu>
    </Nav>

   
  );
};

export default Navbar;