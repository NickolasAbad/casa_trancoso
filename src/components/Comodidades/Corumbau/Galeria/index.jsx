import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import corumbau from '../../../../images/Comodidades/Corumbau_01.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: corumbau,
        thumbnail: corumbau,
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
