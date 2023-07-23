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
    width: 'auto',
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
                            Você concorda com os{' '}
                            <a
                                href="/termos-e-condicoes"
                                style={{ textDecoration: 'none' }}
                            >
                                {' '}
                                Termos e Condições
                            </a>{' '}
                            e com as{' '}
                            <a
                                href="/regras"
                                style={{ textDecoration: 'none' }}
                            >
                                Regras de Locação
                            </a>
                            ?
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
                                        color="error"
                                        onClick={togglerModal}
                                        style={{ maxHeight: '40px' }}
                                    >
                                        Não
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        href="https://wa.link/ug42ju"
                                        target="_blank"
                                        onClick={togglerModal}
                                        style={{ maxHeight: '40px' }}
                                    >
                                        Concordo
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
