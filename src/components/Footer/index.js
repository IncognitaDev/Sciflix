import React from 'react';
import { FooterBase ,Img } from './styles';
import Logo from '../../assets/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <Img src={Logo} alt="Logo Sciflix" />
      </a>
      <p>
        Orgulhosamente criado por <a href='https://github.com/IncognitaDev'><strong>Luis Sousa</strong></a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
