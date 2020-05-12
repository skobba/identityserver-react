import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDown = styled.div`
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  &:hover {
    background-color: red;
  }
  & ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Header = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #004176;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 0 10px -5px #ccc;
  z-index: 10000;
`;

const HeaderNav = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: right;
  font-size: 12px;

  & > svg {
    fill: #0069a5;
  }
`;

const APSLogo = styled.span`
  vertical-align: middle;
  line-height: 60px;
  text-align: center;
  margin-left: 25px;
  text-transform: capitalize;
  font-size: 35px;
`;

const HeaderLink = styled(Link)`
  margin-left: 25px;
  display: flex;
  align-items: right;
  font-size: 12px;
  line-height: 60px;
  color: white;
  text-decoration: none;
`;

const FavIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  display: inline-block;
  text-align: center;
  color: white;

  line-height: 60px;
  text-align: center;
  margin-right: 25px;
`;

const AccountItem = styled.div`
  vertical-align: middle;
  line-height: 60px;
  text-align: center;
  margin-right: 25px;
`;

const AccountInfo = styled(Link)`
  margin-right: 25px;
  display: flex;
  color: white;
  text-decoration: none;
`;
export default {
  Header,
  Logo: APSLogo,
  HeaderNav,
  HeaderLink,
  AccountItem,
  FavIcon,
  AccountInfo,
  DropDown,
  DropDownContent,
  StyledA,
  SubA
};
