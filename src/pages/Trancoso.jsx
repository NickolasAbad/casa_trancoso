import React from 'react';

import Galeria from '@/components/Comodidades/Trancoso/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Trancoso = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Trancoso;
