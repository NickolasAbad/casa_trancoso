import styled, { css } from 'styled-components';

const button = css`
    text-decoration: none;
    padding: 18px 24px;
    color: #fff;
    background-color: #e61c5d;
    border-radius: 45px;
    border: 2px solid #e61c5d;
    font-weight: 500;
    font-size: 20px;
    user-select: none;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: calc(80%);
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ReserveDicasSection = styled.section`
    padding: 5.6vw;
`;

export const ReserveDicasContent = styled.div`
    display: block;
    text-align: center;
`;

export const Reserve = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
`;

export const ReserveDicasHeader = styled.div`
    text-align: center;
`;

export const ReserveH2 = styled.h2`
    color: #112b3c;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;

    span {
        color: #e61c5d;
    }
`;

export const ReserveDesc = styled.p`
    color: #808080;
    font-size: 18px;
    font-weight: 400;
    margin: 32px 0 48px;
`;

export const ButtonDicas = styled.a.attrs({
    href: 'https://blogdeviagemeturismo.com.br/dicas-de-viagem-a-trancoso/',
    target: '_blank',
})`
    margin-right: 16px;
    ${button};

    @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 8px;
    }
`;

export const ButtonReserve = styled.a`
    ${button}
`;
