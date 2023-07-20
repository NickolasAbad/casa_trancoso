import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    display: none;

    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: #fff;
        display: grid;
        align-items: center;
        top: 0;
        left: 0;
        transition: 0.3s ease-in-out;
        opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
        top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #112b3c;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #808080;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #112b3c;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarBtn = styled(LinkS)`
    border-radius: 50px;
    background-color: #e61c5d;
    white-space: nowrap;
    padding: 18px 24px;
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
