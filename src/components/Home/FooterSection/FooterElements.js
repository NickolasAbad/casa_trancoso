import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Footer = styled.footer`
    position: relative;
    display: flex;
    align-items: center;
    height: 400px;
    background-color: #fff;
    box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.04);
`;

export const FooterContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    column-gap: 32px;
`;

export const FooterInstagram = styled.div`
    position: absolute;
    left: 0;
    font-size: 14px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        position: relative;
    }
`;

export const InstagramItems = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;

    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 16px;
    }
`;

export const FooterSobre = styled.div`
    display: block;
`;

export const FooterInformacoes = styled.div`
    display: block;
`;

export const FooterTitle = styled.h4`
    color: #112b3c;
    font-size: 18px;
    font-weight: 700;
`;

export const ItemSobre = styled(LinkS)`
    font-size: 14px;
    display: block;
    color: #112b3c;
    font-weight: 400;
    margin: 18px 0;
    text-decoration: none;
    cursor: pointer;
`;

export const ItemInformacoes = styled(LinkR)`
    font-size: 14px;
    display: block;
    margin: 18px 0;
    color: #112b3c;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
`;

export const FooterDeveloper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    text-align: center;

    a {
        text-decoration: none;
    }
`;
