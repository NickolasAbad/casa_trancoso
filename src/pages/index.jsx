import React, { useState } from 'react';

import AvaliacoesSection from '@/components/Home/AvaliacoesSection/';
import ComodidadesSection from '@/components/Home/ComodidadesSection';
import HeroSection from '@/components/Home/HeroSection';
import Navbar from '@/components/Home/Navbar';
import ReserveDicas from '@/components/Home/ReserveDicasSection';
import Sidebar from '@/components/Home/Sidebar';
import SobreSection from '@/components/Home/SobreSection';
import ModalDiv from '@/containers/Modal';

const Home = () => {
    const [open, setOpen] = useState(false);
    const togglerModal = () => setOpen(!open);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} togglerModal={togglerModal} />
            <ModalDiv togglerModal={togglerModal} open={open} />
            <HeroSection />
            <SobreSection />
            <ComodidadesSection />
            <AvaliacoesSection />
            <ReserveDicas togglerModal={togglerModal} />
        </>
    );
};

export default Home;
