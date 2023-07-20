import React from 'react';

import Galeria from '@/components/Comodidades/Caraiva/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Caraiva = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Caraiva;
