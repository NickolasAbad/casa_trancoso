import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import image from '../../images/heroimages.png';
import { Container } from '../Container';

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
    return (
        <>
            <HeroContainer id="inicio">
                <Container>
                    <HeroContent>
                        <HeroTexts>
                            <HeroH1>
                                Ouse viver o <span>extraordinário</span>.
                            </HeroH1>
                            <HeroP>
                                Seu refúgio perfeito, apenas um clique de
                                distância!
                            </HeroP>
                            <HeroButton
                                onClick={() =>
                                    window.open(
                                        'https://goo.gl/maps/fmJLvfh9sXp3MXbu6',
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
                            <img src={image} alt="" />
                        </HeroImage>
                    </HeroContent>
                </Container>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
