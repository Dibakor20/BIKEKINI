import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background:white;
  box-shadow: 0 3px 6px 0 rgb(36 39 44 / 10%);
  z-index: 1;
  border-top: 1px solid lightgray;
  top: 0;
  left: 0;
  right: 0;

  @media screen and (max-width:768px) {
    padding: 0.4rem 3rem;
  }
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: orange;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif !important;
  span {
    font-weight: 300;
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif !important;
  }
`;

export const Menu = styled.div<{isOpen?:boolean}>`
  display: flex;
  justify-content:space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  padding: 0.7rem 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif !important;
  position: relative;
  &:hover{
    color: #7b7fda;
  }
  @media screen and (max-width:1050px) {
      font-size: 0.6rem;
  }
  @media screen and (max-width:768px) {
     padding: 0.8rem 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0%;
    left: 9%;
    padding: 18px 0px;
  }
`;
