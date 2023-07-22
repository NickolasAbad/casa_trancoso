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
    width: 200px;
    margin: 0 auto;

    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: calc(80%);
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const ReserveDicasSection = styled.section`
    padding: 5.6vw 5.6vw 11.2vw;
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
    padding: 32px 0 64px;
`;

export const ButtonReserve = styled.a`
    ${button}
`;
