import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import ofuro from '../../../../images/Comodidades/Ofuro_01.jpeg';
import ofuro2 from '../../../../images/Comodidades/Ofuro_02.jpeg';
import ofuro3 from '../../../../images/Comodidades/Ofuro_03.jpeg';
import ofuro4 from '../../../../images/Comodidades/Ofuro_04.jpeg';
import ofuro5 from '../../../../images/Comodidades/Ofuro_05.jpeg';
import ofuro6 from '../../../../images/Comodidades/Ofuro_06.jpeg';
import ofuro7 from '../../../../images/Comodidades/Ofuro_07.jpeg';
import ofuro8 from '../../../../images/Comodidades/Ofuro_08.jpeg';
import ofuro9 from '../../../../images/Comodidades/Ofuro_09.jpeg';
import ofuro10 from '../../../../images/Comodidades/Ofuro_10.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: ofuro,
        thumbnail: ofuro,
    },
    {
        original: ofuro2,
        thumbnail: ofuro2,
    },
    {
        original: ofuro3,
        thumbnail: ofuro3,
    },
    {
        original: ofuro4,
        thumbnail: ofuro4,
    },
    {
        original: ofuro5,
        thumbnail: ofuro5,
    },
    {
        original: ofuro6,
        thumbnail: ofuro6,
    },
    {
        original: ofuro7,
        thumbnail: ofuro7,
    },
    {
        original: ofuro8,
        thumbnail: ofuro8,
    },
    {
        original: ofuro9,
        thumbnail: ofuro9,
    },
    {
        original: ofuro10,
        thumbnail: ofuro10,
    },
];

const Galeria = () => {
    return (
        <GaleriaSection>
            <Container style={{ marginBottom: '10vh' }}>
                <ImageGallery autoPlay={true} items={images} lazyLoad={true} />
            </Container>
        </GaleriaSection>
    );
};

export default Galeria;
