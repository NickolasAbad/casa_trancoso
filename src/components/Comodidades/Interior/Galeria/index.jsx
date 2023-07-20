import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import interior from '../../../../images/Comodidades/Cozinha_01.jpeg';
import interior2 from '../../../../images/Comodidades/Cozinha_02.jpeg';
import interior3 from '../../../../images/Comodidades/Cozinha_03.jpeg';
import interior4 from '../../../../images/Comodidades/Cozinha_04.jpeg';
import interior5 from '../../../../images/Comodidades/Cozinha_05.jpeg';
import interior6 from '../../../../images/Comodidades/Cozinha_06.jpeg';
import interior7 from '../../../../images/Comodidades/Cozinha_07.jpeg';
import interior8 from '../../../../images/Comodidades/Sala_01.jpeg';
import interior9 from '../../../../images/Comodidades/Sala_02.jpeg';
import interior10 from '../../../../images/Comodidades/Sala_03.jpeg';
import interior11 from '../../../../images/Comodidades/Sala_04.jpeg';
import interior12 from '../../../../images/Comodidades/Sala_05.jpeg';
import interior13 from '../../../../images/Comodidades/Sala_06.jpeg';
import interior14 from '../../../../images/Comodidades/Sala_07.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: interior,
        thumbnail: interior,
    },
    {
        original: interior2,
        thumbnail: interior2,
    },
    {
        original: interior3,
        thumbnail: interior3,
    },
    {
        original: interior4,
        thumbnail: interior4,
    },
    {
        original: interior5,
        thumbnail: interior5,
    },
    {
        original: interior6,
        thumbnail: interior6,
    },
    {
        original: interior7,
        thumbnail: interior7,
    },
    {
        original: interior8,
        thumbnail: interior8,
    },
    {
        original: interior9,
        thumbnail: interior9,
    },
    {
        original: interior10,
        thumbnail: interior10,
    },
    {
        original: interior11,
        thumbnail: interior11,
    },
    {
        original: interior12,
        thumbnail: interior12,
    },
    {
        original: interior13,
        thumbnail: interior13,
    },
    {
        original: interior14,
        thumbnail: interior14,
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
