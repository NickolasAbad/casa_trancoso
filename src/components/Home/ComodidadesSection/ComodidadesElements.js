import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const ComodidadesContainer = styled.section`
    height: 100vh;
    padding: 100px 16px 40px;

    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 1024px) and (max-height: 650px) {
        padding-top: 180px;
    }

    @media screen and (max-height: 600px) {
        padding-top: 280px;
    }
`;

export const ComodidadesContent = styled.div``;

export const ComodidadesHeader = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ComodidadesTexts = styled.div`
    display: block;
`;

export const ComodidadesSpan = styled.span`
    color: #e61c5d;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    text-transform: uppercase;
`;

export const ComodidadesH2 = styled.h2`
    color: #112b3c;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;

    span {
        color: #e61c5d;
    }
`;

export const ComodidadesControl = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: end;
    color: #e61c5d;
    fill-opacity: 0.8;
    font-size: 48px;

    @media screen and (max-width: 768px) {
        justify-content: center;
        margin-top: 32px;
    }
`;

export const ComodidadesControlL = styled.div`
    display: flex;
    margin-right: 6px;
    cursor: pointer;
`;

export const ComodidadesControlR = styled.div`
    display: flex;
    margin-left: 6px;
    cursor: pointer;
`;

export const ComodidadesSwiper = styled.div`
    margin-top: 80px;
`;

export const ComodidadesItem = styled.div`
    height: 500px;
    width: 300px;
    background-color: #fff;
    box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.04);
`;

export const ItemImage = styled(LinkR)`
    display: block;
    height: 300px;
    max-width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 16px 16px 0px 0px;
    }
`;

export const ItemInfos = styled.div`
    padding: 24px;
    display: block;
    align-items: start;
`;

export const ItemTitle = styled.h2`
    font-size: 20px;
    color: #112b3c;
    font-weight: 700;
    line-height: 24px;
`;

export const ItemDesc = styled.p`
    margin-top: 8px;
    color: #112b3c;
    font-size: 14px;
    font-weight: 400;
`;

export const ItemButton = styled(LinkR)`
    margin-top: 8px;
    text-decoration: none;
    cursor: pointer;
    color: #e61c5d;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    position: absolute;
    bottom: 24px;
`;
