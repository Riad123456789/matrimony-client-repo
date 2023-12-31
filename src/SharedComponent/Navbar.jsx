import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Button } from '@mui/material';












function Navbar() {

    const { user, logOut } = useContext(AuthContext)

    const Home = <NavLink to={'/'}>Home</NavLink>
    const Dashboard = <NavLink to={'/dashboardLayout'}>{user ? 'Dashboard' : ""}</NavLink>
    const AboutUs = <NavLink to={'/AboutUs'}>About Us</NavLink>
    const ContactUs = <NavLink to={'/register'}>Contact Us</NavLink>
    const Biodatas = <NavLink to={'/allbiodata'}>Biodatas</NavLink>



    const pages = [Home, Biodatas, AboutUs, ContactUs, Dashboard];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'indianred' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Matrimony
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', color: 'red' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Matrimony
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip >
                            {
                                user ? <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                </IconButton>
                                    :
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>

                            }

                        </Tooltip>

                        {
                            user ?

                                <Button
                                    onClick={handleLogout}
                                    variant="contained"
                                    sx={{ color: 'Black', ml: 1 }}>

                                    <Typography sx={{ fontWeight: '4', fontSize: 13, }}>
                                        <Link>Logout</Link>
                                    </Typography>
                                </Button>

                                :
                                <Button
                                    variant="contained"
                                    sx={{ color: 'Black', ml: 1 }}>

                                    <Typography sx={{ fontWeight: '4', fontSize: 13, }}>
                                        <Link to={'/login'}>Log in</Link>
                                    </Typography>
                                </Button>
                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;