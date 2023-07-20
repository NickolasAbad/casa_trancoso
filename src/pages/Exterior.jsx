import React from 'react';

import Galeria from '@/components/Exterior/Galeria';
import Navbar from '@/components/Exterior/Navbar';

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
