import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import churrasqueira from '../../../../images/Comodidades/Churrasqueira_01.jpeg';
import churrasqueira2 from '../../../../images/Comodidades/Churrasqueira_02.jpeg';
import churrasqueira3 from '../../../../images/Comodidades/Churrasqueira_03.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: churrasqueira,
        thumbnail: churrasqueira,
    },
    {
        original: churrasqueira2,
        thumbnail: churrasqueira2,
    },
    {
        original: churrasqueira3,
        thumbnail: churrasqueira3,
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
