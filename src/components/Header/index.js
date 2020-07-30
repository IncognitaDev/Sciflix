import React from "react";
import {Link} from 'react-router-dom'

import Logo from "../../assets/Logo.png";
import Button from "../Button";
import { MenuWrapper, LogoImage } from "./styles.js";

function Header() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="SciFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </MenuWrapper>
  );
}

export default Header;
