import React from 'react';

import { Container } from '@/components/Container';

import {
    ButtonReserve,
    ReserveDesc,
    ReserveDicasContent,
    ReserveDicasHeader,
    ReserveDicasSection,
    ReserveH2,
} from './Reserve';

const ReserveDicas = ({ togglerModal }) => {
    return (
        <ReserveDicasSection id="dicas">
            <Container>
                <ReserveDicasContent>
                    <ReserveDicasHeader>
                        <ReserveH2>
                            <span>Reserva</span>
                        </ReserveH2>
                        <ReserveDesc>
                            Agende já sua hospedagem na Casa Odara Trancoso
                        </ReserveDesc>
                    </ReserveDicasHeader>
                    <ButtonReserve onClick={togglerModal}>
                        Reserve agora
                    </ButtonReserve>
                </ReserveDicasContent>
            </Container>
        </ReserveDicasSection>
    );
};

export default ReserveDicas;
