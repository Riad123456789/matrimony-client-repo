

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
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import { gettoken, saveuser } from '../Api/auth';
import { useLocation, useNavigate } from 'react-router-dom';





const defaultTheme = createTheme();



export default function SignIn() {
  const { signIn, signInWithGoogle, } = useContext(AuthContext)
  const Navigate = useNavigate()
  const Location = useLocation();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email')
    const password = data.get('password')

    try {
      const result = await signIn(email, password)
      await saveuser(result?.user)
      await gettoken(result?.user?.email)
      alert('success')
      Navigate(Location?.state ? Location.state : "/")

    } catch (error) {
      console.log(error)
    }
  };


  const HandleGoogle = async (e) => {

    e.preventDefault()
    try {
      const result = await signInWithGoogle()
      await saveuser(result?.user)
      await gettoken(result?.user?.email)
      alert('success')
      Navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{ border: 1, mt: 10, pb: 10, px: 2 }} component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1, }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}