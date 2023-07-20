import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import trancoso2 from '../../../../images/Comodidades/BanheiroTrancoso_01.jpeg';
import trancoso3 from '../../../../images/Comodidades/BanheiroTrancoso_02.jpeg';
import trancoso4 from '../../../../images/Comodidades/BanheiroTrancoso_03.jpeg';
import trancoso from '../../../../images/Comodidades/Trancoso_01.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: trancoso,
        thumbnail: trancoso,
    },
    {
        original: trancoso2,
        thumbnail: trancoso2,
    },
    {
        original: trancoso3,
        thumbnail: trancoso3,
    },
    {
        original: trancoso4,
        thumbnail: trancoso4,
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
