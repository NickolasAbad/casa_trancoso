import styled from 'styled-components';

export const SobreContainer = styled.section`
    padding: 5.6vw;
`;

export const SobreContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-flow: column;
        #a {
            order: 2;
        }
        #b {
            order: 1;
        }
    }
`;

export const SobreImage = styled.div`
    margin-right: 128px;

    @media screen and (max-width: 1200px) {
        margin-right: 100px;
    }

    @media screen and (max-width: 992px) {
        text-align: center;
        margin-right: 80px;

        img {
            margin-top: 40px;
            height: 400px;
        }
    }

    @media screen and (max-width: 330px) {
        img {
            height: 300px;
        }
    }
`;

export const SobreTexts = styled.div`
    max-width: 50%;
    padding-top: 80px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding-top: 0;
    }
`;

export const SobreSpan = styled.span`
    color: #e61c5d;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    text-transform: uppercase;
`;

export const SobreH2 = styled.h2`
    color: #112b3c;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;

    span {
        color: #e61c5d;
    }
`;

export const SobreP = styled.p`
    color: #808080;
    font-size: 20px;
    font-weight: 400;
    line-height: 2rem;
    margin-bottom: 1.5rem;
`;

export const SobreInfos = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 330px) {
        display: block;
        text-align: center;
    }
`;

export const SobreQuartos = styled.div`
    display: block;
    text-align: center;
    padding-right: 24px;
`;

export const SobreQuartosN = styled.span`
    display: block;
    color: #e61c5d;
    font-size: 40px;
    font-weight: 700;
`;

export const SobreQuartosT = styled.span`
    display: block;
    color: #808080;
    font-size: 16px;
    font-weight: 400;
`;

export const SobreBanheiros = styled.div`
    display: block;
    text-align: center;
    padding-right: 24px;
`;

export const SobreBanheirosN = styled.span`
    display: block;
    color: #e61c5d;
    font-size: 40px;
    font-weight: 700;
`;

export const SobreBanheirosT = styled.span`
    display: block;
    color: #808080;
    font-size: 16px;
    font-weight: 400;
`;

export const SobreAndares = styled.div`
    display: block;
    text-align: center;
    padding-right: 24px;
`;

export const SobreAndaresN = styled.span`
    display: block;
    color: #e61c5d;
    font-size: 40px;
    font-weight: 700;
`;

export const SobreAndaresT = styled.span`
    display: block;
    color: #808080;
    font-size: 16px;
    font-weight: 400;
`;

export const SobreGaragem = styled.div`
    display: block;
    text-align: center;
    max-width: 92%;
    text-align: center;
    margin: 0;
`;

export const SobreGaragemN = styled.span`
    display: block;
    color: #e61c5d;
    font-size: 40px;
    font-weight: 700;
`;

export const SobreGaragemT = styled.span`
    display: block;
    color: #808080;
    font-size: 16px;
    font-weight: 400;
`;
