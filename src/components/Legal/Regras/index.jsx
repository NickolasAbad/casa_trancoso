import React from 'react';

import { Container } from '@/components/Container';

const Regras = () => {
    const rulesData = [
        {
            rule: 'É proibido fumar dentro da casa.',
        },
        {
            rule: 'Não são permitidos animais de estimação.',
        },
        {
            rule: 'Todas as crianças devem estar sob supervisão de um adulto ao utilizar a piscina e jacuzzi.',
        },
        {
            rule: 'Evite desperdício de água e energia, desligando as luzes e aparelhos eletrônicos quando não estiverem em uso.',
        },
        {
            rule: 'É proibido realizar festas ou eventos sem autorização prévia.',
        },
        {
            rule: 'Respeite e preserve a área verde, evitando danos às plantas e jardins.',
        },
        {
            rule: 'Toda a louça e utensílios utilizados devem ser devidamente limpos e guardados após o uso.',
        },
        {
            rule: 'A casa deve ser deixada em boas condições e organização, conforme o estado em que foi encontrada.',
        },
    ];
    return (
        <section
            style={{
                padding: '1vw',
                backgroundColor: '#112b3c',
                height: '100vh',
            }}
        >
            <Container>
                <h1
                    style={{
                        color: 'white',
                        marginBottom: '16px',
                    }}
                >
                    Regras de locação
                </h1>
                <ul
                    style={{
                        color: '#fff',
                        listStyle: 'none',
                        marginBottom: '64px',
                    }}
                >
                    {rulesData.map((rules, index) => (
                        <li key={index} style={{ lineHeight: '24px' }}>
                            {index + 1} - {rules.rule}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Regras;
