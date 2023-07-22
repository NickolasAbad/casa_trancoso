import React, { useCallback, useRef } from 'react';
import {
    AiFillLeftCircle,
    AiFillRightCircle,
    AiFillStar,
} from 'react-icons/ai';
import LazyLoad from 'react-lazy-load';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '@/components/Container';

import Daniela from '../../../images/Avaliacoes/M.jpeg';
import Delimar from '../../../images/Avaliacoes/M.jpeg';
import Jackeline from '../../../images/Avaliacoes/M.jpeg';
import Leila from '../../../images/Avaliacoes/M.jpeg';
import Rosane from '../../../images/Avaliacoes/M.jpeg';
import Bruno from '../../../images/Avaliacoes/R.jpeg';
import Ricardo from '../../../images/Avaliacoes/R.jpeg';

import {
    AvaliacoesControl,
    AvaliacoesControlL,
    AvaliacoesControlR,
    AvaliacoesDesc,
    AvaliacoesH2,
    AvaliacoesHeader,
    AvaliacoesItem,
    AvaliacoesNote,
    AvaliacoesPessoa,
    AvaliacoesSection,
    AvaliacoesSpan,
    AvaliacoesSwiper,
    AvaliacoesTexts,
    ItemAvatar,
    ItemInfos,
    ItemName,
    ItemRate,
} from './AvaliacoesElements';

const Avaliacoes = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const slidesData = [
        {
            image: Jackeline,
            alt: 'Foto Jackeline Avaliação',
            title: 'Jackeline',
            desc: 'Desde o primeiro contato com a proprietária senti muita confiança, e quando cheguei na casa, pude confirmar como tinha feito a escolha certa.',
        },
        {
            image: Bruno,
            alt: 'Foto Bruno Avaliação',
            title: 'Bruno L.',
            desc: 'Sensacional!!! A casa consegue ser mais bonita e aconchegante do que parecer ser nas fotos!! Melhor lugar que ja fiquei em trancoso!',
        },
        {
            image: Rosane,
            alt: 'Foto Rosane Avaliação',
            title: 'Rosane',
            desc: 'A nossa hospedagem foi perfeita. A casa é nova e enorme, com uma decoração elegantíssima que nos remete ao clima praiano. ',
        },
        {
            image: Daniela,
            alt: 'Foto Daniela Avaliação',
            title: 'Daniela',
            desc: 'excelente a casa, limpeza, conforto, camas, roupas de cama, móveis muito bem decorada estilo trancoso. funcionária muito simpática',
        },
        {
            image: Leila,
            alt: 'Foto Leila Avaliação',
            title: 'Leila',
            desc: 'A casa é maravilhosa, muito confortável e bem decorada. E bem equipada, as anfitriãs são muito prestativas e atenciosas!',
        },
        {
            image: Delimar,
            alt: 'Foto Delimar Avaliação',
            title: 'Delimar K.',
            desc: 'Casa maravilhosa, com certeza irei voltar mais vezes!',
        },
        {
            image: Ricardo,
            alt: 'Foto Ricardo Avaliação',
            title: 'Ricardo',
            desc: 'Casa sensacional!!!, Excelente para quem procura conforto e alto astral',
        },
    ];

    return (
        <AvaliacoesSection id="avaliacoes">
            <Container>
                <div>
                    <AvaliacoesHeader>
                        <AvaliacoesTexts>
                            <AvaliacoesSpan>Feedback</AvaliacoesSpan>
                            <AvaliacoesH2>
                                Avaliações de <span>hóspedes</span> satisfeitos
                            </AvaliacoesH2>
                        </AvaliacoesTexts>
                        <AvaliacoesControl>
                            <AvaliacoesControlL>
                                <AiFillLeftCircle onClick={handlePrev} />
                            </AvaliacoesControlL>
                            <AvaliacoesControlR>
                                <AiFillRightCircle onClick={handleNext} />
                            </AvaliacoesControlR>
                        </AvaliacoesControl>
                    </AvaliacoesHeader>
                    <AvaliacoesSwiper>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation, Autoplay, Pagination]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            {slidesData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <AvaliacoesItem>
                                        <AvaliacoesPessoa>
                                            <ItemAvatar>
                                                <LazyLoad
                                                    height={80}
                                                    offset={600}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={slide.image}
                                                        alt={slide.alt}
                                                    />
                                                </LazyLoad>
                                            </ItemAvatar>
                                            <ItemInfos>
                                                <ItemName>
                                                    {slide.title}
                                                </ItemName>
                                                <ItemRate>
                                                    <AiFillStar color="gold" />
                                                    <AiFillStar color="gold" />
                                                    <AiFillStar color="gold" />
                                                    <AiFillStar color="gold" />
                                                    <AiFillStar color="gold" />
                                                </ItemRate>
                                            </ItemInfos>
                                        </AvaliacoesPessoa>
                                        <AvaliacoesNote>
                                            <AvaliacoesDesc>
                                                {slide.desc}
                                            </AvaliacoesDesc>
                                        </AvaliacoesNote>
                                    </AvaliacoesItem>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </AvaliacoesSwiper>
                </div>
            </Container>
        </AvaliacoesSection>
    );
};

export default Avaliacoes;
