import React from 'react';

import Galeria from '@/components/Comodidades/Churrasqueira/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Churrasqueira = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Churrasqueira;
