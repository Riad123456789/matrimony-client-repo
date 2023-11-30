
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../SharedComponent/Navbar';
import Footer from '../SharedComponent/Footer';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { gettoken, saveuser } from '../Api/auth';
import { imageUpload } from '../Api/util';
import { useNavigate } from 'react-router-dom';







// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
  const navigat = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    const name = data.get('Name')
    const Email = data.get('email')
    const password = data.get('password')
    const photo = data.get('Photo')


    console.log(photo)
    try {

      const imageData = await imageUpload(photo)

      console.log(imageData)
      const result = await createUser(Email, password)
      await updateUserProfile(name, imageData?.data?.display_url)

      await saveuser(result?.user)
      await gettoken(result?.user?.email)
      alert('success')
      navigat("/")

    } catch (error) {
      console.log(error)
    }

  };


  const HandleGoogle = async (event) => {
    event.preventDefault()
    try {
      const result = await signInWithGoogle()
      await saveuser(result?.user)
      await gettoken(result?.user?.email)
      alert('success')
      navigat("/")

    } catch (error) {
      console.log(error)
    }
  }


  return (


    <ThemeProvider theme={defaultTheme}>
      <Navbar></Navbar>
      <Container sx={{ border: 1, my: 2, pb: 3 }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <span className='pl-1'>  Photo URL:</span>
                <TextField
                  // required
                  fullWidth
                  name="Photo"
                  type="file"
                  accept='image/*'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#34ebe5' }}
            >
              <Typography sx={{ color: 'black', pl: 1, }}> <span className='font-semibold'>Sing up</span></Typography>
            </Button>

            <Button
              onClick={HandleGoogle}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, bgcolor: '#34ebe5' }}

            >
              <FcGoogle size={25}></FcGoogle>
              <Typography sx={{ color: 'black', pl: 1, }}> <span className='font-semibold'>Google</span></Typography>
            </Button>
            <Grid container justifyContent="">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  );
}