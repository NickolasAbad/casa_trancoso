import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { Container } from '@/components/Container';

import './style.css';

const FooterSection = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <div className="row">
                        <div className="footer-col">
                            <h4>Sobre</h4>
                            <ul>
                                <li>
                                    <a href="/">Início</a>
                                </li>
                                <li>
                                    <a href="#sobre">Sobre</a>
                                </li>
                                <li>
                                    <a href="#comodidades">Comodidades</a>
                                </li>
                                <li>
                                    <a href="#avaliacoes">Avaliações</a>
                                </li>
                                <li>
                                    <a href="#dicas">Dicas</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Informações</h4>
                            <ul>
                                <li>
                                    <a href="/politica-de-privacidade">
                                        Política de Privacidade
                                    </a>
                                </li>
                                <li>
                                    <a href="/termos-e-condicoes">
                                        Termos e condições de uso
                                    </a>
                                </li>
                                <li>
                                    <a href="/regras">Regras</a>
                                </li>
                                <li>
                                    <a href="#reserve">Contato</a>
                                </li>
                                <li>
                                    <a href="#reserve">Reserva</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Acompanhe no Instagram</h4>
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/casaodaratrancoso/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>
                                Feito por:{' '}
                                <a
                                    style={{ textDecoration: 'underline' }}
                                    href="https://bit.ly/nickolasabad"
                                >
                                    Nickolas Abad
                                </a>{' '}
                                ❤️
                            </h4>{' '}
                            <a
                                style={{ textDecoration: 'underline' }}
                                href="https://github.com/NickolasAbad/"
                            >
                                GitHub
                            </a>{' '}
                            &{' '}
                            <a
                                style={{ textDecoration: 'underline' }}
                                href="https://linkedin.com/in/nickolas-desenvolvedor"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default FooterSection;
