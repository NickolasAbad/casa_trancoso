import React, { useEffect } from 'react';

import Regras from '@/components/Legal/Regras';
import Navbar from '@/containers/Navbar';

const RegrasPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <Regras />
        </>
    );
};

export default RegrasPage;
