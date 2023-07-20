import styled from 'styled-components';

export const AvaliacoesSection = styled.section`
    padding: 5.6vw;
`;

export const AvaliacoesHeader = styled.div`
    display: block;
    text-align: center;
`;

export const AvaliacoesTexts = styled.div`
    margin: 0 auto;
`;

export const AvaliacoesSpan = styled.span`
    color: #e61c5d;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
    text-transform: uppercase;
`;

export const AvaliacoesH2 = styled.h2`
    color: #112b3c;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 24px;

    span {
        color: #e61c5d;
    }
`;

export const AvaliacoesControl = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e61c5d;
    fill-opacity: 0.8;
    font-size: 48px;
    margin-top: 32px;
`;

export const AvaliacoesControlL = styled.div`
    display: flex;
    margin-right: 6px;
    cursor: pointer;
`;

export const AvaliacoesControlR = styled.div`
    display: flex;
    margin-left: 6px;
    cursor: pointer;
`;

export const AvaliacoesSwiper = styled.div`
    margin-top: 80px;
`;

export const AvaliacoesItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px;
    height: 350px;
    width: 300px;
    background-color: #fff;
    box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.04);
    border: 1px solid var(--grey-2, #fafafa);
    border-radius: 16px;
`;

export const AvaliacoesPessoa = styled.div`
    display: block;
    text-align: center;
`;

export const ItemAvatar = styled.div`
    margin: 0 auto;
    height: 80px;
    width: 80px;
    margin-bottom: 12px;

    img {
        border-radius: 50px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const ItemInfos = styled.div`
    display: block;
`;

export const ItemName = styled.span`
    color: #112b3c;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
`;

export const ItemRate = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AvaliacoesNote = styled.div`
    display: block;
    margin-top: 32px;
`;

export const AvaliacoesDesc = styled.p`
    color: #112b3c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
`;
