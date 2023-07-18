import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Título Casa</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="inicio">Início</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="comodidades">Comodidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="avaliacoes">Avaliações</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="dicas">Dicas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="reserve">Reserve agora</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
