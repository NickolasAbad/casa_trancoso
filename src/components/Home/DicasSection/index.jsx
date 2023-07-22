import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material';

import { Container } from '@/components/Container';

import {
    DicasContainer,
    DicasContent,
    DicasH2,
    DicasHeader,
    DicasSpan,
} from './DicasElements';

const Dicas = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <DicasContainer id="dicas">
            <Container>
                <DicasContent>
                    <DicasHeader>
                        <DicasSpan>Dicas</DicasSpan>
                        <DicasH2>
                            Nossas dicas para a melhor experiência em{' '}
                            <span>Trancoso</span>.
                        </DicasH2>
                    </DicasHeader>
                    <div>
                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ fontWeight: 'bold' }}>
                                    O que fazer
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    O Centro do povoado é ponto de encontro em
                                    Trancoso, o famoso Quadrado, que tem uma
                                    magia única com uma igreja no centro e
                                    casinhas coloridas ao redor. O lugar é a
                                    praça mais frequentada da região, com
                                    inúmeras opções de comércios locais, lojas,
                                    cafeterias, bares e restaurantes ao seu
                                    redor.
                                </Typography>
                                <br />
                                <Typography>
                                    Quando o sol dá lugar a lua, tudo se
                                    transforma no vilarejo, o Quadrado ganha o
                                    brilho das pequenas luzes dos restaurantes e
                                    bares, deixando tudo mais especial. Em alta
                                    temporada, principalmente no Réveillon e
                                    carnaval, a calmaria do vilarejo dá espaço
                                    ao agito e festas.
                                </Typography>
                                <br />
                                <Typography>
                                    Em alta temporada, principalmente no
                                    Réveillon e carnaval, a calmaria do vilarejo
                                    dá espaço ao agito e festas. O Teatro
                                    L’Occitane tem algumas programações de shows
                                    durante o ano, mas é importante procurar
                                    saber antes, pois não há uma agenda fixa.
                                    Algumas pessoas também aproveitam os dias em
                                    Trancoso para esticar a viagem em Caraíva,
                                    Arraial d’Ajuda, Corumbau e vilarejos
                                    vizinhos.
                                </Typography>
                                <br />
                                <Typography>
                                    Durante o dia, você pode aproveitar as
                                    deslumbrantes e paradisíacas praias, fazer
                                    caminhadas na areia e apreciar as paisagens
                                    fascinantes da região. Já a noite, a
                                    sugestão é ir para o centro histórico e
                                    curtir o clima do Quadrado.
                                </Typography>
                                <br />
                                <Typography>
                                    Réveillon em Trancoso Trancoso no final de
                                    ano virou sinônimo de festa badalada, fina e
                                    elegante, sendo o destino queridinho de
                                    famosos para a virada do ano fora das
                                    grandes capitais.
                                </Typography>
                                <br />
                                <Typography>
                                    Apesar de toda essa parte histórica que é
                                    pura poesia em Trancoso, sem dúvidas, as
                                    praias vão ocupar grande parte do seu
                                    encantamento pelo vilarejo. Durante o dia,
                                    você pode aproveitar as deslumbrantes e
                                    paradisíacas praias, fazer caminhadas na
                                    areia e apreciar as paisagens fascinantes da
                                    região. Já a noite, a sugestão é ir para o
                                    centro histórico e curtir o clima do
                                    Quadrado.
                                </Typography>
                                <br />
                                <Typography>
                                    Réveillon em Trancoso Trancoso no final de
                                    ano virou sinônimo de festa badalada, fina e
                                    elegante, sendo o destino queridinho de
                                    famosos para a virada do ano fora das
                                    grandes capitais.
                                </Typography>
                                <br />
                                <Typography>
                                    Dica importante: Se decidir curtir a
                                    badalação da virada de ano em Trancoso, sem
                                    problemas. Mas, já comece a olhar passagens
                                    e hospedagem. O quanto antes melhor. Isto
                                    porque a disponibilidade acaba muito, muito
                                    rápido.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Melhores praias
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Quem vai para o vilarejo baiano, já logo se
                                    prepara para mergulhar nas lindas praias da
                                    região. Afinal, uma das explicações da
                                    perfeição de Trancoso está na beleza única
                                    do mar e da natureza que a cerca. São
                                    coqueiros altos, águas cristalinas e
                                    falésias impressionantes.
                                </Typography>
                                <br />
                                <Typography>
                                    Praia é o que não falta na região, mas a
                                    nossa dica é não deixar de conhecer as mais
                                    lindas e queridinhas que são:
                                </Typography>
                                <br />
                                <ul
                                    style={{
                                        listStyle: 'none',
                                    }}
                                >
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/L5mWARYqKCG9xFfy8"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia dos Coqueiros
                                        </a>
                                    </li>
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/nJXpJgQedx6TC6Kx5"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia dos Nativos
                                        </a>
                                    </li>
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/nfDyudNmCfwxxRP39"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia de Trancoso
                                        </a>
                                    </li>
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/EaZe2zY2MdKJyrUYA"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia de Rio Verde
                                        </a>
                                    </li>
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/it5KuW6kAv8hNBnr9"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia Rio da Barra
                                        </a>
                                    </li>
                                    <li style={{ paddingBottom: '4px' }}>
                                        <a
                                            style={{
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                color: '#e61c5d',
                                            }}
                                            href="https://goo.gl/maps/QPZW3P1YWLeJec2M9"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Praia dos Amores
                                        </a>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Quantos dias ficar
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Indicamos ficar em Trancoso, pelo menos,{' '}
                                    <b>cinco</b> dias. Este é o tempo estimado
                                    para aproveitar tranquilamente as praias
                                    paradisíacas e principais pontos turísticos
                                    da cidade. Quando a opção é visitar
                                    vilarejos e praias vizinhas, como Porto
                                    Seguro, Arraial d’Ajuda e Caraíva, a dica é
                                    estender a viagem por mais alguns dias.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </DicasContent>
            </Container>
        </DicasContainer>
    );
};

export default Dicas;
