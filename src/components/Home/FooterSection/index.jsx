import React from 'react';
import { Instagram } from '@mui/icons-material';

import { Container } from '@/components/Container';

import {
    Footer,
    FooterContent,
    FooterDeveloper,
    FooterInformacoes,
    FooterInstagram,
    FooterSobre,
    FooterTitle,
    InstagramItems,
    ItemInformacoes,
    ItemSobre,
} from './FooterElements';

const FooterSection = () => {
    return (
        <>
            <Footer>
                <Container>
                    <FooterContent>
                        <FooterInstagram>
                            <InstagramItems
                                to="https://www.instagram.com/casaodaratrancoso/"
                                target="_blank"
                            >
                                <Instagram style={{ marginRight: '4px' }} />
                                <span
                                    style={{
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    Instagram Casa Odara
                                </span>
                            </InstagramItems>
                        </FooterInstagram>
                        <div
                            className="infos"
                            style={{ display: 'flex', columnGap: '32px' }}
                        >
                            <FooterSobre>
                                <FooterTitle>Sobre</FooterTitle>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="inicio"
                                >
                                    Início
                                </ItemSobre>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="sobre"
                                >
                                    Sobre
                                </ItemSobre>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="comodidades"
                                >
                                    Comodidades
                                </ItemSobre>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="avaliacoes"
                                >
                                    Avaliações
                                </ItemSobre>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="dicas"
                                >
                                    Dicas
                                </ItemSobre>
                            </FooterSobre>
                            <FooterInformacoes>
                                <FooterTitle>Informações</FooterTitle>
                                <ItemInformacoes to="/politica-de-privacidade">
                                    Política de Privacidade
                                </ItemInformacoes>
                                <ItemInformacoes to="/termos-e-condicoes">
                                    Termos e condições de uso
                                </ItemInformacoes>
                                <ItemInformacoes to="/regras">
                                    Regras
                                </ItemInformacoes>
                                <ItemInformacoes to="https://api.whatsapp.com/send?phone=5577988115001">
                                    Contato
                                </ItemInformacoes>
                                <ItemSobre
                                    spy={true}
                                    smooth
                                    offset={-70}
                                    duration={500}
                                    to="dicas"
                                >
                                    Reserva
                                </ItemSobre>
                            </FooterInformacoes>
                        </div>
                        <span></span>
                    </FooterContent>
                    <FooterDeveloper>
                        <ItemInformacoes
                            to={'https://www.bit.ly/nickolasabad'}
                            target="_blank"
                            style={{ margin: '0', paddingBottom: '8px' }}
                        >
                            Desenvolvido por{' '}
                            <a
                                href="https://www.bit.ly/nickolasabad"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Nickolas Abad
                            </a>{' '}
                            ❤️ |{' '}
                            <a href="https://linkedin.com/in/nickolas-desenvolvedor">
                                LinkedIn{' '}
                            </a>{' '}
                            &{' '}
                            <a href="https://github.com/NickolasAbad">GitHub</a>
                        </ItemInformacoes>
                    </FooterDeveloper>
                </Container>
            </Footer>
        </>
    );
};

export default FooterSection;
