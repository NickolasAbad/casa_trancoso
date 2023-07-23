import React, { useCallback, useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { LuBedDouble, LuBedSingle } from 'react-icons/lu';
import LazyLoad from 'react-lazy-load';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

// Imagens para thumbnail
import Arraial from '../../../images/Comodidades/Arraial_01.jpeg';
import Caraiva from '../../../images/Comodidades/Caraiva_01.jpeg';
import Churrasqueira from '../../../images/Comodidades/Churrasqueira_01.jpeg';
import Corumbau from '../../../images/Comodidades/Corumbau_01.jpeg';
import Interior from '../../../images/Comodidades/Cozinha_05.jpeg';
import Exterior from '../../../images/Comodidades/Exterior_03.jpeg';
import Fachada from '../../../images/Comodidades/Fachada_01.jpeg';
import Ofuro from '../../../images/Comodidades/Ofuro_02.jpeg';
import PortoSeguro from '../../../images/Comodidades/PortoSeguro_01.jpeg';
import Espelho from '../../../images/Comodidades/PraiaDoEspelho_02.jpeg';
import Trancoso from '../../../images/Comodidades/Trancoso_01.jpeg';
// Container
import { Container } from '../../Container';

import {
    ComodidadesContainer,
    ComodidadesContent,
    ComodidadesControl,
    ComodidadesControlL,
    ComodidadesControlR,
    ComodidadesH2,
    ComodidadesHeader,
    ComodidadesItem,
    ComodidadesSpan,
    ComodidadesSwiper,
    ComodidadesTexts,
    ItemButton,
    ItemDesc,
    ItemImage,
    ItemInfos,
    ItemTitle,
} from './ComodidadesElements';

// Import Swiper styles
import 'swiper/css';
import './swiper.css';

const Comodidades = () => {
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
            to: '/fachada',
            image: Fachada,
            alt: 'Foto Fachada da Casa',
            title: 'Fachada',
            desc: 'Desfrute desta vista maravilhosa da nossa fachada',
            buttonText: 'Ver imagens',
        },
        {
            to: '/exterior',
            image: Exterior,
            alt: 'Foto Exterior da Casa',
            title: 'Exterior',
            desc: 'Flores, piscina, área verde, tudo isso e muito mais você só encontra aqui',
            buttonText: 'Ver imagens',
        },
        {
            to: '/interior',
            image: Interior,
            alt: 'Foto Interior da Casa',
            title: 'Interior',
            desc: 'Desfrute do luxo e elegância com o conforto e a beleza presente no interior da nossa casa.',
            buttonText: 'Ver imagens',
        },
        {
            to: '/ofuro',
            image: Ofuro,
            alt: 'Foto Ofurô da Casa',
            title: 'Ofurô',
            desc: 'Espaço gourmet acomplado com um ofurô pensado e planejado exclusivamente para o seu relaxamento',
            buttonText: 'Ver imagens',
        },
        {
            to: '/churrasqueira',
            image: Churrasqueira,
            alt: 'Foto Churrasqueira da Casa',
            title: 'Churrasqueira',
            desc: 'Espaço com churrasqueira e mesa, ótimo para reunir família, amigos e conhecidos para um evento aconchegante',
            buttonText: 'Ver imagens',
        },
        {
            to: '/caraiva',
            image: Caraiva,
            alt: 'Foto da Suíte 1',
            title: 'Suíte Caraíva',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 1x Cama Casal</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
        {
            to: '/arraial',
            image: Arraial,
            alt: 'Foto da Suíte 2',
            title: 'Suíte Arraial',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 1x Cama Queen Size</span>
                    <br />
                    <LuBedSingle />
                    <span> 1x Cama Solteiro</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
        {
            to: '/trancoso',
            image: Trancoso,
            alt: 'Foto da Suíte 3',
            title: 'Suíte Trancoso',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 1x Cama Queen Size</span>
                    <br />
                    <LuBedSingle />
                    <span> 1x Cama Solteiro</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
        {
            to: '/praia-do-espelho',
            image: Espelho,
            alt: 'Foto da Suíte 4',
            title: 'Suíte Praia do Espelho',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 1x Cama Queen Size</span>
                    <br />
                    <LuBedSingle />
                    <span> 2x Cama Solteiro</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
        {
            to: '/porto-seguro',
            image: PortoSeguro,
            alt: 'Foto Suíte 5',
            title: 'Suíte Porto Seguro',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 2x Cama Casal</span>
                    <br />
                    <LuBedSingle />
                    <span> 2x Cama Solteiro</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
        {
            to: '/corumbau',
            image: Corumbau,
            alt: 'Foto Suíte 6',
            title: 'Suíte Corumbau',
            desc: (
                <>
                    <LuBedDouble />
                    <span> 1x Cama Queen Size</span>
                    <br />
                    <LuBedSingle />
                    <span> 2x Cama Solteiro</span>
                </>
            ),
            buttonText: 'Ver imagens',
        },
    ];

    return (
        <ComodidadesContainer id="comodidades">
            <Container>
                <ComodidadesContent>
                    <ComodidadesHeader>
                        <ComodidadesTexts>
                            <ComodidadesSpan>Comodidades</ComodidadesSpan>
                            <ComodidadesH2>
                                Confira o que te aguarda no nosso
                                <span> paraíso</span>.
                            </ComodidadesH2>
                        </ComodidadesTexts>
                        <ComodidadesControl>
                            <ComodidadesControlL>
                                <AiFillLeftCircle onClick={handlePrev} />
                            </ComodidadesControlL>
                            <ComodidadesControlR>
                                <AiFillRightCircle onClick={handleNext} />
                            </ComodidadesControlR>
                        </ComodidadesControl>
                    </ComodidadesHeader>
                    <ComodidadesSwiper>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={1}
                            spaceBetween={10}
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
                                    <ComodidadesItem>
                                        <ItemImage to={slide.to}>
                                            <LazyLoad height={300} offset={600}>
                                                <img
                                                    loading="lazy"
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                />
                                            </LazyLoad>
                                        </ItemImage>
                                        <ItemInfos>
                                            <ItemTitle>{slide.title}</ItemTitle>
                                            <ItemDesc>{slide.desc}</ItemDesc>
                                            <ItemButton to={slide.to}>
                                                {slide.buttonText}
                                            </ItemButton>
                                        </ItemInfos>
                                    </ComodidadesItem>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ComodidadesSwiper>
                </ComodidadesContent>
            </Container>
        </ComodidadesContainer>
    );
};

export default Comodidades;
