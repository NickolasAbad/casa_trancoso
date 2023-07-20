import React from 'react';

import Galeria from '@/components/Comodidades/Arraial/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Arraial = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Arraial;
