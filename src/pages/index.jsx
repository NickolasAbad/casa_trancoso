import React, { useState } from 'react';

import ComodidadesSection from '@/components/Home/ComodidadesSection';
import HeroSection from '@/components/Home/HeroSection';
import Navbar from '@/components/Home/Navbar';
import Sidebar from '@/components/Home/Sidebar';
import SobreSection from '@/components/Home/SobreSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <SobreSection />
            <ComodidadesSection />
        </>
    );
};

export default Home;
