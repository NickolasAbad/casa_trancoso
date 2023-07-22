import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import image from '../../../images/Hero/heroimages.png';
import { Container } from '../../Container';

import {
    HeroButton,
    HeroButtonDesc,
    HeroButtonH5,
    HeroButtonIcon,
    HeroButtonText,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroImage,
    HeroP,
    HeroTexts,
} from './HeroElements';

const HeroSection = () => {
    const maps = 'https://g.co/kgs/ytihC4';
    return (
        <>
            <HeroContainer id="inicio">
                <Container>
                    <HeroContent>
                        <HeroTexts>
                            <HeroH1>
                                Seu refúgio praiano em <span>Trancoso</span>.
                            </HeroH1>
                            <HeroP>
                                Feita para sediar momentos incríveis e lindos
                                dias de sol num ambiente lindo e sofisticado!
                            </HeroP>
                            <HeroButton
                                onClick={() =>
                                    window.open(
                                        maps,
                                        '_blank',
                                        'rel=noopener noreferrer',
                                    )
                                }
                            >
                                <HeroButtonIcon>
                                    <FaMapMarkedAlt />
                                </HeroButtonIcon>
                                <HeroButtonText>
                                    <HeroButtonH5>Localização</HeroButtonH5>
                                    <HeroButtonDesc>
                                        Trancoso, Porto Seguro - BA
                                    </HeroButtonDesc>
                                </HeroButtonText>
                            </HeroButton>
                        </HeroTexts>
                        <HeroImage>
                            <img src={image} alt="Foto entrada Casa Odará" />
                        </HeroImage>
                    </HeroContent>
                </Container>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
