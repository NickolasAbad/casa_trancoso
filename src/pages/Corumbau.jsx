import React from 'react';

import Galeria from '@/components/Comodidades/Corumbau/Galeria';
import Navbar from '@/containers/Navbar';

import 'react-image-gallery/styles/css/image-gallery.css';

const Corumbau = () => {
    return (
        <>
            <Navbar />
            <Galeria />
        </>
    );
};

export default Corumbau;
