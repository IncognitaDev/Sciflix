import styled from 'styled-components';
import Button from '../Button'

export const LogoImage = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  z-index: 51;
  width: 100vw;
  height: 80px;

  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px){
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`

`; 