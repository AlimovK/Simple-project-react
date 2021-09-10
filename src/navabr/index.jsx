import React from "react";
import {
  Wrapper,
  TopLeft,
  Logo,
  Locus,
  TopCenter,
  TopMenu,
  TopButton,
} from "./style";
import logo from "../assets/logo.png";
import locus from "../assets/Locus.png";

const Navbar = () => {
  return (
    <Wrapper>
      {/* logo */}
      <TopLeft>
        <Logo src={logo}></Logo>
        <Locus>Locus</Locus>
      </TopLeft>
      {/* Top menu */}
      <TopCenter>
        <TopMenu>Home</TopMenu>
        <TopMenu>Contact</TopMenu>
        <TopMenu>Location</TopMenu>
        <TopMenu>About Us</TopMenu>
      </TopCenter>
      <TopButton>Sign Up</TopButton>
    </Wrapper>
  );
};
export default Navbar;
