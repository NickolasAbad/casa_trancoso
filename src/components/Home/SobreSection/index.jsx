import React from 'react';

import image from '../../../images/Sobre/sobreImages.png';
import { Container } from '../../Container';

import {
    SobreAndares,
    SobreAndaresN,
    SobreAndaresT,
    SobreBanheiros,
    SobreBanheirosN,
    SobreBanheirosT,
    SobreContainer,
    SobreContent,
    SobreGaragem,
    SobreGaragemN,
    SobreGaragemT,
    SobreH2,
    SobreImage,
    SobreInfos,
    SobreP,
    SobreQuartos,
    SobreQuartosN,
    SobreQuartosT,
    SobreSpan,
    SobreTexts,
} from './SobreElements';

const Sobre = () => {
    return (
        <SobreContainer id="sobre">
            <Container>
                <SobreContent>
                    <SobreImage id="a">
                        <img
                            src={image}
                            alt="Foto interior e piscina da Casa Odará"
                        />
                    </SobreImage>
                    <SobreTexts id="b">
                        <SobreSpan>Sobre</SobreSpan>
                        <SobreH2>
                            Nossa essência é <span>realizar o seu sonho</span>
                        </SobreH2>
                        <SobreP>
                            Desfrute de luxo e natureza em nossa casa de
                            temporada com jacuzzi, piscina e área verde. Relaxe,
                            aproveite a tranquilidade e crie memórias
                            inesquecíveis!
                        </SobreP>
                        <SobreInfos>
                            <SobreQuartos>
                                <SobreQuartosN>6</SobreQuartosN>
                                <SobreQuartosT>Quartos</SobreQuartosT>
                            </SobreQuartos>
                            <SobreBanheiros>
                                <SobreBanheirosN>7</SobreBanheirosN>
                                <SobreBanheirosT>Banheiros</SobreBanheirosT>
                            </SobreBanheiros>
                            <SobreAndares>
                                <SobreAndaresN>2</SobreAndaresN>
                                <SobreAndaresT>Andares</SobreAndaresT>
                            </SobreAndares>
                            <SobreGaragem>
                                <SobreGaragemN>2</SobreGaragemN>
                                <SobreGaragemT>Vagas de garagem</SobreGaragemT>
                            </SobreGaragem>
                        </SobreInfos>
                    </SobreTexts>
                </SobreContent>
            </Container>
        </SobreContainer>
    );
};

export default Sobre;
