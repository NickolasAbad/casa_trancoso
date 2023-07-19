import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        max-width: 540px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        max-width: 720px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        max-width: 960px;
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;
