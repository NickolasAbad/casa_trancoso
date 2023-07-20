import React from 'react';

import Galeria from '@/components/Comodidades/PortoSeguro/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const PortoSeguro = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default PortoSeguro;
