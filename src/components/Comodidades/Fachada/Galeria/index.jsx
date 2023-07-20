import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import fachada from '../../../../images/Comodidades/Fachada_01.jpeg';
import fachada2 from '../../../../images/Comodidades/Fachada_02.jpeg';
import fachada3 from '../../../../images/Comodidades/Fachada_03.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: fachada,
        thumbnail: fachada,
    },
    {
        original: fachada2,
        thumbnail: fachada2,
    },
    {
        original: fachada3,
        thumbnail: fachada3,
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
