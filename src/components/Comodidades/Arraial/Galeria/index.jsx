import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import arraial from '../../../../images/Comodidades/Arraial_01.jpeg';
import arraial2 from '../../../../images/Comodidades/Arraial_02.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: arraial,
        thumbnail: arraial,
    },
    {
        original: arraial2,
        thumbnail: arraial2,
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
