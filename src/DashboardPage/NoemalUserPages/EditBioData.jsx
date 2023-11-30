import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { getBiodata } from '../../Api/Biodata';
import { imageUpload } from '../../Api/util';



const defaultTheme = createTheme();

export default function SignUp() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const image = data.get('Photo')
        const imageData = await imageUpload(image)

        const Biodata = {
            Email: data.get('Email'),
            Type: data.get('Type'),
            Name: data.get('Name'),
            FatherName: data.get('FatherName'),
            MotherName: data.get('MotherName'),
            Date_of_birth: data.get('Date of birth'),
            Height: parseInt(data.get('Height')),
            Weight: parseInt(data.get('Weight')),
            Age: data.get('Age'),
            Photo: imageData?.data?.display_url,
            Occupation: data.get('Occupation'),
            Race: data.get('Race'),
            Permanent_Division: data.get('Permanent Division'),
            Present_Division: data.get('Present Division'),
            Expected_Partner_Age: parseInt(data.get('Expected Partner Age')),
            Expected_Partner_Height: parseInt(data.get('Expected Partner Height')),
            Expected_Partner_Weight: parseInt(data.get('Expected Partner Weight')),
            Mobile_Number: parseInt(data.get('Mobile Number')),
            BiodataStatas:"",
        };
        // console.log(Biodata)

        try {
            await getBiodata(Biodata)
            alert('success')
        } catch (error) {
            console.log(error)
        }
    };

    const { user } = useContext(AuthContext)

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // border: 1,
                        padding: 2,
                        backgroundColor: "transparent"
                    }}
                >

                    <Typography component="h1" variant="h5">
                        ----------------- Edit Your Biodata ----------------
                    </Typography>

                </Box>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={20} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Biodata Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Biodata Type"
                                    name='Type'
                                    required
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                </Select>
                            </FormControl>


                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="Name"
                                required
                                fullWidth
                                id="Name"
                                label="Name"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Occupation"
                                    name='Occupation'
                                >
                                    <MenuItem value={'Student'}>Student</MenuItem>
                                    <MenuItem value={'Job'}>Job</MenuItem>
                                    <MenuItem value={'House wife'}>House wife</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Height</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Height"
                                    name='Height'
                                >
                                    <MenuItem value={4}>4 ft</MenuItem>
                                    <MenuItem value={5}>5 ft</MenuItem>
                                    <MenuItem value={6}>6 ft</MenuItem>
                                    <MenuItem value={7}>7 ft</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Weight</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Weight"
                                    name='Weight'
                                >
                                    <MenuItem value={30}>30 kg</MenuItem>
                                    <MenuItem value={35}>35 kg</MenuItem>
                                    <MenuItem value={40}>40 kg</MenuItem>
                                    <MenuItem value={45}>45 kg</MenuItem>
                                    <MenuItem value={50}>50 kg</MenuItem>
                                    <MenuItem value={55}>55 kg</MenuItem>
                                    <MenuItem value={60}>60 kg</MenuItem>
                                    <MenuItem value={65}>65 kg</MenuItem>
                                    <MenuItem value={70}>70 kg</MenuItem>
                                    <MenuItem value={75}>75 kg</MenuItem>
                                    <MenuItem value={80}>80 kg</MenuItem>
                                    <MenuItem value={85}>85 kg</MenuItem>
                                    <MenuItem value={90}>90 kg</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                label="Age"
                                name="Age"
                                autoComplete="Age"
                                type='number'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span className='pl-1'>  Photo URL:</span>
                            <TextField
                                required
                                fullWidth
                                name="Photo"
                                type="file"
                                accept='image/*'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span className=''> Date of birth:</span>
                            <TextField
                                // autoComplete="given-name"
                                name="Date of birth"
                                required
                                fullWidth
                                id="firstName"
                                // label="Date of birth"
                                autoFocus
                                type='date'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="FatherName"
                                required
                                fullWidth
                                id="FatherName"
                                label="FatherName"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="MotherName"
                                required
                                fullWidth
                                id="MotherName"
                                label="MotherName"

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Race</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Race"
                                    name='Race'
                                >
                                    <MenuItem value={'Islam'}>Islam</MenuItem>
                                    <MenuItem value={'Christianity'}>Christianity</MenuItem>
                                    <MenuItem value={'Buddhism'}>Buddhism</MenuItem>
                                    <MenuItem value={'Hindu'}>Hindu</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Permanent Division</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Permanent Division"
                                    name='Permanent Division'
                                >
                                    <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                    <MenuItem value={'Chattragram'}>Christianity</MenuItem>
                                    <MenuItem value={'Rangpur'}>Rangpur</MenuItem>
                                    <MenuItem value={'Barisal'}>Barisal</MenuItem>
                                    <MenuItem value={'Khulna'}>Khulna</MenuItem>
                                    <MenuItem value={'Maymansign'}>Maymansign</MenuItem>
                                    <MenuItem value={'Sylhet'}>Sylhet</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Present Division</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Present Division"
                                    name='Present Division'
                                >
                                    <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                    <MenuItem value={'Chattragram'}>Christianity</MenuItem>
                                    <MenuItem value={'Rangpur'}>Rangpur</MenuItem>
                                    <MenuItem value={'Barisal'}>Barisal</MenuItem>
                                    <MenuItem value={'Khulna'}>Khulna</MenuItem>
                                    <MenuItem value={'Maymansign'}>Maymansign</MenuItem>
                                    <MenuItem value={'Sylhet'}>Sylhet</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="Expected Partner Age"
                                required
                                fullWidth
                                id="Expected Partner Age"
                                label="Expected Partner Age"
                                autoFocus
                                type='number'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Expected Partner Height</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Expected Partner Height"
                                    name='Expected Partner Height'
                                >
                                    <MenuItem value={4}>4 ft</MenuItem>
                                    <MenuItem value={5}>5 ft</MenuItem>
                                    <MenuItem value={6}>6 ft</MenuItem>
                                    <MenuItem value={7}>7 ft</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Expected Partner Weight</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Expected Partner Weight"
                                    name='Expected Partner Weight'
                                >
                                    <MenuItem value={30}>30 kg</MenuItem>
                                    <MenuItem value={35}>35 kg</MenuItem>
                                    <MenuItem value={40}>40 kg</MenuItem>
                                    <MenuItem value={45}>45 kg</MenuItem>
                                    <MenuItem value={50}>50 kg</MenuItem>
                                    <MenuItem value={55}>55 kg</MenuItem>
                                    <MenuItem value={60}>60 kg</MenuItem>
                                    <MenuItem value={65}>65 kg</MenuItem>
                                    <MenuItem value={70}>70 kg</MenuItem>
                                    <MenuItem value={75}>75 kg</MenuItem>
                                    <MenuItem value={80}>80 kg</MenuItem>
                                    <MenuItem value={85}>85 kg</MenuItem>
                                    <MenuItem value={90}>90 kg</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="Mobile Number"
                                required
                                fullWidth
                                id="Mobile Number"
                                label="Mobile Number"
                                type='number'
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                defaultValue={user?.email}
                                name="Email"
                                label="Contact Email"
                                type="email"

                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Publish Now
                    </Button>

                </Box>


            </Container>
        </ThemeProvider>
    );
}