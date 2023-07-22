import React from 'react';

import { Container } from '@/components/Container';

import {
    Footer,
    FooterContent,
    FooterDeveloper,
    FooterInformacoes,
    FooterSobre,
    FooterTitle,
    ItemInformacoes,
    ItemSobre,
} from './FooterElements';

const FooterSection = () => {
    return (
        <>
            <Footer>
                <Container>
                    <FooterContent>
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
