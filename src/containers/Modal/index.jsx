import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    IconButton,
    Modal,
    Stack,
    Typography,
} from '@mui/material';

import { Container } from '@/components/Container';

// import { TesteResponsivo } from './ModalElements';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pb: 0,
    border: 'none',
    borderRadius: 4,
};

const ModalDiv = ({ togglerModal, open }) => {
    return (
        <Container>
            <div>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    disableAutoFocus
                >
                    <Box sx={style} p={1}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Box>
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    fontWeight={'bold'}
                                    component="h2"
                                    p={1}
                                    pb={2}
                                >
                                    Regras de locação
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton onClick={togglerModal}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <hr />
                        <Typography id="modal-modal-description" p={1} pt={2}>
                            Ao prosseguir com a sua reserva, você concorda com
                            os{' '}
                            <a href="/termos-e-condicoes">
                                {' '}
                                Termos e Condições
                            </a>{' '}
                            e com as <a href="/regras">Regras de Locação</a>
                            <br />
                        </Typography>
                        <footer>
                            <Box
                                display={'flex'}
                                justifyContent={'end'}
                                alignItems={'center'}
                                p={1}
                                pt={2}
                            >
                                <Stack spacing={2} direction="row">
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        onClick={togglerModal}
                                    >
                                        Fechar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="https://wa.link/fy7tjl"
                                        target="_blank"
                                        onClick={togglerModal}
                                    >
                                        Aceitar e continuar com a reserva
                                    </Button>
                                </Stack>
                            </Box>
                        </footer>
                    </Box>
                </Modal>
            </div>
        </Container>
    );
};

export default ModalDiv;
