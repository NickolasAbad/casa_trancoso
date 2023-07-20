import React, { useCallback, useRef } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { LuBedDouble, LuBedSingle } from 'react-icons/lu';
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
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/fachada'}>
                                        <img
                                            src={Fachada}
                                            alt="Foto Fachada da Casa"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Fachada</ItemTitle>
                                        <ItemDesc>
                                            Desfrute desta vista maravilhosa da
                                            nossa fachada
                                        </ItemDesc>
                                        <ItemButton to={'/fachada'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/exterior'}>
                                        <img
                                            src={Exterior}
                                            alt="Foto Exterior da Casa"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Exterior</ItemTitle>
                                        <ItemDesc>
                                            Flores, piscina, área verde, tudo
                                            isso e muito mais você só encontra
                                            aqui
                                        </ItemDesc>
                                        <ItemButton to={'/exterior'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/interior'}>
                                        <img
                                            src={Interior}
                                            alt="Foto Interior da Casa"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Interior</ItemTitle>
                                        <ItemDesc>
                                            Desfrute do luxo e elegância com o
                                            conforto e a beleza presente no
                                            interior da nossa casa.
                                        </ItemDesc>
                                        <ItemButton to={'/interior'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/ofuro'}>
                                        <img
                                            src={Ofuro}
                                            alt="Foto Ofurô da Casa"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Ofurô</ItemTitle>
                                        <ItemDesc>
                                            Espaço gourmet acomplado com um
                                            ofurô pensado e planejado
                                            exclusivamente para o seu
                                            relaxamento
                                        </ItemDesc>
                                        <ItemButton to={'/ofuro'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/churrasqueira'}>
                                        <img
                                            src={Churrasqueira}
                                            alt="Foto Churrasqueira da Casa"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Churrasqueira</ItemTitle>
                                        <ItemDesc>
                                            Espaço com churrasqueira e mesa,
                                            ótimo para reunir família, amigos e
                                            conhecidos para um evento
                                            aconchegante
                                        </ItemDesc>
                                        <ItemButton to={'/ofuro'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/caraiva'}>
                                        <img
                                            src={Caraiva}
                                            alt="Foto da Suíte 1"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Suíte Caraíva</ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 1x Cama Casal</span>
                                        </ItemDesc>
                                        <ItemButton to={'/caraiva'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'/arraial'}>
                                        <img
                                            src={Arraial}
                                            alt="Foto da Suíte 2"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Súite Arraial</ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 1x Cama Queen Size</span>
                                            <br />
                                            <LuBedSingle />
                                            <span> 1x Cama Solteiro</span>
                                        </ItemDesc>
                                        <ItemButton to={'/arraial'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'trancoso'}>
                                        <img
                                            src={Trancoso}
                                            alt="Foto da Suíte 3"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Súite Trancoso</ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 1x Cama Queen Size</span>
                                            <br />
                                            <LuBedSingle />
                                            <span> 1x Cama Solteiro</span>
                                        </ItemDesc>
                                        <ItemButton to={'trancoso'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'praia-do-espelho'}>
                                        <img
                                            src={Espelho}
                                            alt="Foto da Suíte 4"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>
                                            Súite Praia do Espelho
                                        </ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 1x Cama Queen Size</span>
                                            <br />
                                            <LuBedSingle />
                                            <span> 2x Cama Solteiro</span>
                                        </ItemDesc>
                                        <ItemButton to={'praia-do-espelho'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'porto-seguro'}>
                                        <img
                                            src={PortoSeguro}
                                            alt="Foto Suíte 5"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>
                                            Súite Porto Seguro
                                        </ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 2x Cama Casal</span>
                                            <br />
                                            <LuBedSingle />
                                            <span> 2x Cama Solteiro</span>
                                        </ItemDesc>
                                        <ItemButton to={'porto-seguro'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ComodidadesItem>
                                    <ItemImage to={'corumbau'}>
                                        <img
                                            src={Corumbau}
                                            alt="Foto Suíte 6"
                                        />
                                    </ItemImage>
                                    <ItemInfos>
                                        <ItemTitle>Súite Corumbau</ItemTitle>
                                        <ItemDesc>
                                            <LuBedDouble />
                                            <span> 1x Cama Queen Size</span>
                                            <br />
                                            <LuBedSingle />
                                            <span> 2x Cama Solteiro</span>
                                        </ItemDesc>
                                        <ItemButton to={'corumbau'}>
                                            Ver imagens
                                        </ItemButton>
                                    </ItemInfos>
                                </ComodidadesItem>
                            </SwiperSlide>
                        </Swiper>
                    </ComodidadesSwiper>
                </ComodidadesContent>
            </Container>
        </ComodidadesContainer>
    );
};

export default Comodidades;
