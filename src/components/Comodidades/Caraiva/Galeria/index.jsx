import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import caraiva3 from '../../../../images/Comodidades/BanheiroCaraiva_01.jpeg';
import caraiva4 from '../../../../images/Comodidades/BanheiroCaraiva_02.jpeg';
import caraiva from '../../../../images/Comodidades/Caraiva_01.jpeg';
import caraiva2 from '../../../../images/Comodidades/Caraiva_02.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: caraiva,
        thumbnail: caraiva,
    },
    {
        original: caraiva2,
        thumbnail: caraiva2,
    },
    {
        original: caraiva3,
        thumbnail: caraiva3,
    },
    {
        original: caraiva4,
        thumbnail: caraiva4,
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
