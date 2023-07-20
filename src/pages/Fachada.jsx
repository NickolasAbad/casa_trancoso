import React from 'react';

import Galeria from '@/components/Comodidades/Fachada/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Fachada = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Fachada;
