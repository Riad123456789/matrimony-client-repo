/* eslint-disable react-hooks/exhaustive-deps */

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../SharedComponent/Navbar';
import Footer from '../../SharedComponent/Footer';

import CheckoutFrom from './CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getAlldata } from '../../Api/Biodata';
import { AuthContext } from '../../provider/AuthProvider';




const defaultTheme = createTheme();

export default function CheckoutPage() {

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
    const [Data, setdata] = useState({})
    const { Biodataid } = useParams()
    const id = (Biodataid.slice(1, 2))
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getAlldata()
            .then(data => {
                if (Biodataid) {
                    const Filtered = data.find(item => item.Biodataid == id)
                    setdata(Filtered)
                }
            })
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar></Navbar>
            <Container sx={{ border: 1, mt: 5, my: 10, pb: 5, px: 2 }} component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box noValidate sx={{ mt: 1, }}>
                        <TextField
                            margin="normal"
                            defaultValue={id}
                            required
                            fullWidth
                            label="biodataId"
                            name="biodataId"
                            autoComplete="biodataId"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Self biodataId"
                            label="Self biodataId"
                            type="number"


                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Self Email"
                            label="Self Email"
                            type="email"
                            defaultValue={user?.email}


                        />

                        <Box sx={{ p: 2, border: 1 }}>
                            <Elements stripe={stripePromise}>
                                <CheckoutFrom Data={Data}></CheckoutFrom>
                            </Elements>
                        </Box>
                    </Box>
                </Box>

            </Container>
            <Footer></Footer>
        </ThemeProvider>
    );
}

