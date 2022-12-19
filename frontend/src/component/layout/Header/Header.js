import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#F85F68"
      burgerColorHover="#a62d24"
      burgerWidth="10vmx"
      logo={logo}
      logoWidth="30vmx"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#F85F68"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35, 0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="3vmax"
      link2Margin="1vmax"
      link3Margin="0px"
      link4Margin="3vmax"
      //
      profileIcon={true}
      profileIconColor="rgba(35, 35, 35,0.8)"
      ProfileIconElement={AiOutlineUser}
      profileIconHover="#eb4034"
      profileIconMargin="20px"
      profileIconUrl="/login"
      //
      searchIcon={true}
      searchIconColor="rgba(35, 35, 35,0.8)"
      SearchIconElement={AiOutlineSearch}
      searchIconHover="#eb4034"
      searchIconMargin="20px"
      //
      cartIcon={true}
      cartIconColor="rgba(35, 35, 35,0.8)"
      CartIconElement={AiOutlineShopping}
      cartIconHover="#eb4034"
      //
    />
  );
};

export default Header;
