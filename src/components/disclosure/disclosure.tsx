import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Typography } from "@mui/material";




const backgroundDisclosure = require('../../assets/image/bg_gradient.png');
const imageBcrLogo = require('../../assets/image/logobcr.png');
const imageDisclosure = require('../../assets/image/imagedisclosure.png');
const imageWhattsApp = require('../../assets/image/whats.png');
const imagePhone = require('../../assets/image/Phone.png');


export default function Disclosure() {
    return (
        <Container maxWidth={false} sx={{ backgroundImage: `url(${backgroundDisclosure})` }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>

                        <img src={imageBcrLogo} alt="imageBcrLogo" />
                        <Typography sx={{ color: '#FFF' }}>
                            <h1>Referência no setor de representação comercial de peças automotivas</h1>
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: '#037334', width: '16rem', height: '3.5rem' }}>Fale Conosco</Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: '#FFF' }}>
                            <span>Escritório</span>
                            <img src={imagePhone} alt="imagePhone" />
                            <Typography sx={{ color: '#037334' }}>
                                <span>(71) 9 9999-999 </span>
                            </Typography>
                            <span>WhatsApp</span>
                            <img src={imageWhattsApp} alt="imageWhattsApp" />
                            <Typography sx={{ color: '#037334' }}>
                                <span>(71) 3329-2222</span>
                            </Typography>
                        </Box>

                        <Box>
                            <img className='imageDisclosure' src={imageDisclosure} alt="imageDisclosure" />
                        </Box>

                    </Grid>

                </Grid>
            </Container>

        </Container >
    );
}


