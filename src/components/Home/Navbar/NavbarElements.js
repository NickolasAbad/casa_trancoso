// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    /* background: #fff; */
    background: #fdfdfd;
    height: 100px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: ${({ scrollNav }) =>
        scrollNav ? '0px 12px 40px 0px rgba(0, 0, 0, 0.04);' : '0'};

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

export const NavLogo = styled(LinkS)`
    color: #112b3c;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 900;
    display: flex;
    align-items: center;

    span {
        margin-left: 8px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 100px;
`;

export const NavLinks = styled(LinkS)`
    color: #808080;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 400;
    padding: 0 20px;
    height: 100%;
    cursor: pointer;

    &.active {
        box-sizing: content-box;
        border-bottom: 3px solid #e61c5d;
        font-weight: 400;
        color: #112b3c;
    }

    @media screen and (max-width: 992px) {
        padding: 0 8px;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background-color: #e61c5d;
    white-space: nowrap;
    padding: 18px 24px;
    /* margin-left: 1rem; */
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: calc(80%);
    }
`;
