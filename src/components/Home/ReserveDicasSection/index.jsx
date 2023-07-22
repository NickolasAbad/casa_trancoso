import React from 'react';

import { Container } from '@/components/Container';

import {
    ButtonDicas,
    ButtonReserve,
    ReserveDesc,
    ReserveDicasContent,
    ReserveDicasHeader,
    ReserveDicasSection,
    ReserveH2,
} from './ReserveDicasElements';

const ReserveDicas = ({ togglerModal }) => {
    return (
        <ReserveDicasSection id="dicas">
            <Container>
                <ReserveDicasContent>
                    <ReserveDicasHeader>
                        <ReserveH2>
                            Dicas e <span>Reserva</span>
                        </ReserveH2>
                        <ReserveDesc>
                            Confira algumas dicas ou agende conosco uma data
                            para se hospedar no paraíso.
                        </ReserveDesc>
                    </ReserveDicasHeader>
                    <ButtonDicas>Confira as dicas</ButtonDicas>
                    <ButtonReserve onClick={togglerModal}>
                        Reserve agora
                    </ButtonReserve>
                </ReserveDicasContent>
            </Container>
        </ReserveDicasSection>
    );
};

export default ReserveDicas;
