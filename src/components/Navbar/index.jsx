import React, { useEffect, useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';

import { Container } from '../Container';

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
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <Container>
                    <NavbarContainer>
                        <NavLogo
                            to="inicio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <FaHome /> <span>Odará</span>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="sobre"
                                >
                                    Sobre
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="comodidades"
                                >
                                    Comodidades
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="avaliacoes"
                                >
                                    Avaliações
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="dicas"
                                >
                                    Dicas
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="reserve"
                            >
                                Reserve agora
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Container>
            </Nav>
        </>
    );
};

export default Navbar;
