import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import exterior from '../../../../images/Comodidades/Exterior_01.jpeg';
import exterior2 from '../../../../images/Comodidades/Exterior_02.jpeg';
import exterior3 from '../../../../images/Comodidades/Exterior_03.jpeg';
import exterior4 from '../../../../images/Comodidades/Exterior_04.jpeg';
import piscina from '../../../../images/Comodidades/Piscina_01.jpeg';
import piscina2 from '../../../../images/Comodidades/Piscina_02.jpeg';
import piscina3 from '../../../../images/Comodidades/Piscina_03.jpeg';
import piscina5 from '../../../../images/Comodidades/Piscina_05.jpeg';
import piscina6 from '../../../../images/Comodidades/Piscina_06.jpeg';
import piscina7 from '../../../../images/Comodidades/Piscina_07.jpeg';
import piscina8 from '../../../../images/Comodidades/Piscina_08.jpeg';
import piscina9 from '../../../../images/Comodidades/Piscina_09.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: exterior,
        thumbnail: exterior,
    },
    {
        original: exterior2,
        thumbnail: exterior2,
    },
    {
        original: exterior3,
        thumbnail: exterior3,
    },
    {
        original: exterior4,
        thumbnail: exterior4,
    },
    {
        original: piscina,
        thumbnail: piscina,
    },
    {
        original: piscina2,
        thumbnail: piscina2,
    },
    {
        original: piscina3,
        thumbnail: piscina3,
    },
    {
        original: piscina5,
        thumbnail: piscina5,
    },
    {
        original: piscina6,
        thumbnail: piscina6,
    },
    {
        original: piscina7,
        thumbnail: piscina7,
    },
    {
        original: piscina8,
        thumbnail: piscina8,
    },
    {
        original: piscina9,
        thumbnail: piscina9,
    },
];

const Galeria = () => {
    return (
        <GaleriaSection>
            <Container style={{ marginBottom: '10vh' }}>
                <ImageGallery autoPlay={true} items={images} />
            </Container>
        </GaleriaSection>
    );
};

export default Galeria;
