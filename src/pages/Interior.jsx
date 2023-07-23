import React from 'react';

import Galeria from '@/components/Comodidades/Interior/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Interior = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Interior;
