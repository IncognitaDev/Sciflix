import React from "react";
import Logo from "../../assets/Logo.png";

import Button from "../Button";
import { MenuWrapper, LogoImage } from "./styles.js";

function Header() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage className="Logo" src={Logo} alt="SciFlix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </MenuWrapper>
  );
}

export default Header;
