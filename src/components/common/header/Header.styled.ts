import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';

export const HeaderSection = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 30% 40% 30%;

  @media screen and (max-width:850px) {
    grid-template-columns: 45% 45%;
    grid-gap:10%;
  }
`;
export const HeaderLogo = styled.div``;

export const BikeLogo = styled.img`
 @media screen and (max-width:768px) {
    width: 150px;
    margin-left:68px;
  }
   @media screen and (max-width:450px) {
    width: 150px;
    margin-left: 37px;
  }
`;

export const SearchCointainer = styled.div`
     @media screen and (max-width:850px) {
      display:block;
      order: 3;
      width: 185%;
      margin-bottom: 10px;
  }
`;
export const SearchInput = styled.input`
  width: 85%;
  height: 40px;
  background: rgb(247, 247, 247);
  border-width: 0px 0px 0px 1px;
  border-left-style: solid;
  border-left-color: rgba(36, 39, 44, 0.1);
  border-radius: 4px 0px 0px 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 4px 0px inset;
  color: rgb(36, 39, 44);
  font-size: 14px;
  line-height: 18px;
  padding: 0px 20px;
    &:focus{
        outline: 0;
    }
    @media screen and (max-width:850px) {
      width: 100%;
  }
`;
export const SearchButton = styled.button`
    background:#d02f2f;
    border: 0px;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    height: 40px;
    width: 60px;
    position: absolute;
`
export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 22px;
    color: #fff;

`

export const HeaderIcon = styled.div`
  margin-left: auto;
`;

export const HeaderAdds = styled.img`
  height: 48px;
  width: 80%;
  display: block;
  margin-left: auto;
  @media screen and (max-width:550px) {
      height: 40px;
      width: 110px;
  }
`

