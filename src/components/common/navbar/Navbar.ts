import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledCardProps {
  isOpen?: boolean;
}

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #333;
  top: 0;
  left: 0;
  right: 0;
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

export const Menu = styled.div<StyledCardProps>`
  display: flex;
  justify-content: space-between;
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
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif !important;
  &:hover {
    color: #7b7fda;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
