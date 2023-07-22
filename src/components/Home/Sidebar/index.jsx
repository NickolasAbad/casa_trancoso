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

const Sidebar = ({ isOpen, toggle, togglerModal }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        onClick={toggle}
                        to="inicio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Início
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        to="sobre"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Sobre
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        to="comodidades"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Comodidades
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        to="avaliacoes"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Avaliações
                    </SidebarLink>
                    <SidebarLink
                        onClick={toggle}
                        to="dicas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Dicas
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarBtn
                        onClick={toggle}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="reserve"
                    >
                        Reserve agora
                    </SidebarBtn>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
