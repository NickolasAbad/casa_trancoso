import styled from 'styled-components';

export const HeroContainer = styled.section`
    padding: 5.6vw;
`;

export const HeroContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const HeroTexts = styled.div`
    max-width: 40%;
    padding-top: 80px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding-top: 0;
    }
`;

export const HeroH1 = styled.h1`
    display: block;
    font-size: 64px;
    font-weight: 800;
    line-height: 120%;
    color: #112b3c;
    margin-bottom: 2rem;
    span {
        color: #ffbd39;
    }

    @media screen and (max-width: 992px) {
        font-size: 48px;
    }

    @media screen and (max-width: 576px) {
        word-wrap: break-word;
    }
`;

export const HeroP = styled.p`
    display: block;
    font-size: 24px;
    font-weight: 400;
    color: #808080;
    margin-bottom: 32px;
`;

export const HeroButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    column-gap: 16px;
    background-color: #fff;
    box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.04);
    border-radius: 50px;
    padding: 24px;
    max-width: fit-content;
    cursor: pointer;
`;

export const HeroButtonIcon = styled.a`
    font-size: 32px;
    color: #e61c5d;
`;

export const HeroButtonText = styled.div`
    display: block;
`;

export const HeroButtonH5 = styled.h5`
    display: block;
    color: #808080;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
`;

export const HeroButtonDesc = styled.p`
    display: block;
    color: #112b3c;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 0;
`;

export const HeroImage = styled.div`
    @media screen and (max-width: 992px) {
        text-align: center;
        margin-top: 32px;

        img {
            height: 375px;
        }
    }

    @media screen and (max-width: 310px) {
        img {
            height: 325px;
        }
    }
`;
