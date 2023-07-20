import React from 'react';

import Galeria from '@/components/Comodidades/PraiaDoEspelho/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const PraiaDoEspelho = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default PraiaDoEspelho;
