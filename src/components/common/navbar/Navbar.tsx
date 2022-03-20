import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "redux/store";
import { Nav, Logo, Menu, MenuLink, MobileIcon } from "./Navbar.styles";
import { FaCartPlus} from "react-icons/fa";
import { IProduct } from "services/Type";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cart: IProduct[] = useSelector((state: AppState) => state.cart)


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
        <MenuLink to="/"><FaCartPlus />{ cart?.length}</MenuLink>
        </Menu>
    </Nav>
  );
};

export default Navbar;


