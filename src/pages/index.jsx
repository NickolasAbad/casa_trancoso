import React, { useState } from 'react';

import AvaliacoesSection from '@/components/Home/AvaliacoesSection/';
import ComodidadesSection from '@/components/Home/ComodidadesSection';
import FooterSection from '@/components/Home/FooterSection';
import HeroSection from '@/components/Home/HeroSection';
import Navbar from '@/components/Home/Navbar';
import ReserveDicasSection from '@/components/Home/ReserveDicasSection';
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
            <ReserveDicasSection togglerModal={togglerModal} />
            <FooterSection />
        </>
    );
};

export default Home;
