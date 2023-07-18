import React from 'react';

import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarBtnWrap,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="inicio">
            Início
          </SidebarLink>
          <SidebarLink onClick={toggle} to="sobre">
            Sobre
          </SidebarLink>
          <SidebarLink onClick={toggle} to="acomodidades">
            Acomodidades
          </SidebarLink>
          <SidebarLink onClick={toggle} to="avaliacoes">
            Avaliações
          </SidebarLink>
          <SidebarLink onClick={toggle} to="dicas">
            Dicas
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn onClick={toggle} to="reserve">
            Reserve agora
          </SidebarBtn>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
