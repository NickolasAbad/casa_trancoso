import React, { useEffect } from 'react';

import Termos from '@/components/Legal/Privacidade';
import Navbar from '@/containers/Navbar';

const TermosCondicoes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <Termos />
        </>
    );
};

export default TermosCondicoes;
