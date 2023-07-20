import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #112b3c;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.04);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
        margin-left: 8px;
    }
`;
