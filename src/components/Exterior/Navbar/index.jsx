import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { Container } from '../../Container';

import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Container>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <BiArrowBack /> <span>VOLTAR</span>
                        </NavLogo>
                    </NavbarContainer>
                </Container>
            </Nav>
        </>
    );
};

export default Navbar;
