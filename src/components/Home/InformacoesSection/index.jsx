import React from 'react';
import { useCollapse } from 'react-collapsed';

import { Container } from '@/components/Container';

import {
    InformacoesContainer,
    InformacoesContent,
    InformacoesH2,
    InformacoesHeader,
    InformacoesP,
    InformacoesSpan,
} from './InformacoesElements';

const Informacoes = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <InformacoesContainer id="sobre">
            <Container>
                <InformacoesContent>
                    <InformacoesHeader>
                        <InformacoesSpan>Informações</InformacoesSpan>
                        <InformacoesH2>
                            Características da <span>Casa Odara</span>
                        </InformacoesH2>
                    </InformacoesHeader>
                    <InformacoesP>
                        Feita para aproveitar o sol e festejar o verão, criamos
                        aqui um refúgio praiano sombreado que convida à reunião
                        de familiares, amigos e ao relaxamento. A Casa Odara
                        Trancoso foi minimamente planejada para tornar os seus
                        dias no paraíso ainda mais incríveis. Cada cômodo da
                        morada tem sua própria personalidade e decoração
                        minimalista que remete a uma deslumbrante praia da
                        região, fazendo da Casa Odara uma morada elegante,
                        ecofriendly e que se funde magistralmente com o mood e o
                        atmosfera praiana cultivados em Trancoso.
                    </InformacoesP>
                    <section {...getCollapseProps()}>
                        <InformacoesP>
                            Tudo isso foi minimamente projetado para a sua
                            felicidade. Com os serviços de camareira, piscineiro
                            e jardineiro inclusos, a casa conta com 6 suítes,
                            piscina privativa, ofurô, área gourmet,
                            churrasqueira, mini bar com rótulos nacionais e
                            internacionais, cama elástica infantil, Wi-Fi, TV
                            por assinatura, rede, estação de trabalho em uma das
                            suítes, freezer de cerveja, freezer de Redbull,
                            garagem privativa, com toda a segurança de um
                            condomínio fechado, tudo isso em meio a uma natureza
                            exuberante, na principal rua de acesso a Trancoso,
                            uma das praias mais exclusivas do Brasil, ao longo
                            da costa leste baiana.
                        </InformacoesP>
                        <InformacoesP>
                            Completíssima, contando com pratos, taças, travessas
                            pra servir, roupas de cama, mesa e banho, formando
                            uma mescla perfeita entre as tradições rústicas e
                            conforto luxuoso moderno.
                        </InformacoesP>
                    </section>
                    <a
                        {...getToggleProps()}
                        style={{ color: '#e61c5d', cursor: 'pointer' }}
                    >
                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                    </a>
                </InformacoesContent>
            </Container>
        </InformacoesContainer>
    );
};

export default Informacoes;
