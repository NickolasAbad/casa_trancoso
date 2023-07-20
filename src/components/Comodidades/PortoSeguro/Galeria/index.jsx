import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import portoseguro from '../../../../images/Comodidades/PortoSeguro_01.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: portoseguro,
        thumbnail: portoseguro,
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
