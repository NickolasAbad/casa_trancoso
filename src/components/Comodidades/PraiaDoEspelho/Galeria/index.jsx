import ImageGallery from 'react-image-gallery';

import { Container } from '@/components/Container';

import praiadoespelho from '../../../../images/Comodidades/PraiaDoEspelho_01.jpeg';
import praiadoespelho2 from '../../../../images/Comodidades/PraiaDoEspelho_02.jpeg';
import praiadoespelho3 from '../../../../images/Comodidades/PraiaDoEspelho_03.jpeg';

import { GaleriaSection } from './GaleriaElements';

const images = [
    {
        original: praiadoespelho,
        thumbnail: praiadoespelho,
    },
    {
        original: praiadoespelho2,
        thumbnail: praiadoespelho2,
    },
    {
        original: praiadoespelho3,
        thumbnail: praiadoespelho3,
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
