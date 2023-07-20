import React from 'react';

import Galeria from '@/components/Comodidades/Ofuro/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Ofuro = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Ofuro;
