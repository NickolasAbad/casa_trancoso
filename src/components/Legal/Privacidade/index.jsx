import React from 'react';

import { Container } from '@/components/Container';

const Privacidade = () => {
    return (
        <>
            <section
                style={{
                    padding: '1vw',
                    backgroundColor: '#112b3c',
                    height: '100vh',
                }}
            >
                <Container>
                    <div style={{ color: 'white' }}>
                        <h1 style={{ marginBottom: '8px' }}>
                            Política de Privacidade para Casa Odará
                        </h1>

                        <p
                            style={{
                                marginBottom: '16px',
                                lineHeight: '20px',
                            }}
                        >
                            No Casa Odará, acessível de
                            https://www.casaodara.com.br, uma de nossas
                            principais prioridades é a privacidade de nossos
                            visitantes. Este documento da Política de
                            Privacidade contém tipos de informações que são
                            coletadas e registradas pelo Casa Odará e como as
                            usamos.
                        </p>

                        <h2 style={{ marginBottom: '8px' }}>Log Files</h2>

                        <p style={{ marginBottom: '16px', lineHeight: '20px' }}>
                            O Casa Odará segue um procedimento padrão de uso de
                            arquivos de log. Esses arquivos registram os
                            visitantes quando eles visitam sites. Todas as
                            empresas de hospedagem fazem isso e fazem parte da
                            análise de serviços de hospedagem. As informações
                            coletadas pelos arquivos de log incluem endereços de
                            protocolo de internet (IP), tipo de navegador,
                            provedor de serviços de Internet (ISP), data e hora,
                            páginas de referência/saída e possivelmente o número
                            de cliques. Estes não estão ligados a nenhuma
                            informação que seja pessoalmente identificável. O
                            objetivo das informações é analisar tendências,
                            administrar o site, rastrear o movimento dos
                            usuários no site e coletar informações demográficas.
                        </p>

                        <h2 style={{ marginBottom: '8px' }}>
                            Política de Cookies e Web Beacons
                        </h2>

                        <p style={{ marginBottom: '16px', lineHeight: '20px' }}>
                            Como qualquer outro site, o Casa Odará usa
                            'cookies'. Esses cookies são usados para armazenar
                            informações, incluindo as preferências dos
                            visitantes e as páginas do site que o visitante
                            acessou ou visitou. As informações são usadas para
                            otimizar a experiência dos usuários, personalizando
                            o conteúdo de nossa página da web com base no tipo
                            de navegador dos visitantes e/ou outras informações.
                        </p>

                        <h2 style={{ marginBottom: '8px' }}>
                            Privacidade do Google DoubleClick DART Cookie
                        </h2>

                        <p style={{ marginBottom: '16px', lineHeight: '20px' }}>
                            O Google é um fornecedor de terceiros em nosso site.
                            Ele também usa cookies, conhecido como DART cookies,
                            para veicular anúncios aos nossos visitantes do site
                            com base em sua visita a www.casaodara.com e outros
                            sites na internet. No entanto, os visitantes podem
                            optar por recusar o uso de cookies DART visitando a
                            Política de Privacidade da rede de anúncios e
                            conteúdo do Google no seguinte URL –
                            https://policies.google.com/technologies/ads
                        </p>

                        <h2 style={{ marginBottom: '8px' }}>Consentimento</h2>

                        <p style={{ marginBottom: '16px', lineHeight: '20px' }}>
                            Ao usar nosso site, você aqui concorda com nossa
                            Política de Privacidade e concorda com seus Termos e
                            Condições.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Privacidade;
