import React from 'react';

import Galeria from '@/components/Comodidades/Exterior/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Exterior = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Exterior;
