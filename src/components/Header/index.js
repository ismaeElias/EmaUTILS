import React from "react";
import { HeaderPage,Image,Title } from "./styles";
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png';


function Header() {
  return (
  <HeaderPage>
      <Link to='/'><Image src={Logo} alt='Logo'/></Link>
      <Title to="/">EmaUTILS</Title>
  </HeaderPage>
  );
}

export default Header;
