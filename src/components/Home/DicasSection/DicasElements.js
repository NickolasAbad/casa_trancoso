import styled from 'styled-components';

export const DicasContainer = styled.section`
    padding: 5.6vw;
`;

export const DicasContent = styled.div`
    display: block;
    align-items: center;
`;

export const DicasHeader = styled.div`
    text-align: start;
    max-width: 60%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const DicasSpan = styled.span`
    color: #e61c5d;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    text-transform: uppercase;
`;

export const DicasH2 = styled.h2`
    color: #112b3c;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;

    span {
        color: #e61c5d;
    }
`;

export const DicasP = styled.p`
    color: #808080;
    font-size: 20px;
    font-weight: 400;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    margin-bottom: 24px;
    text-align: start;
`;
