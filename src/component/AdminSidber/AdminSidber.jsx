import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import PreviewIcon from '@mui/icons-material/Preview';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";





const AdminSidber = () => {

    const { logOut } = useContext(AuthContext)
    const Naviget = useNavigate()

    const Home = <Link to="/"><Typography>Home</Typography></Link>
    const EditBiodata = <Link to="EditBiodata"><Typography>Admin Dashboard</Typography></Link>
    const ManageUsers = <Link to="ManageUsers"><Typography>Manage Users</Typography></Link>
    const ApprovedPremium = <Link to="ApprovedPremium"><Typography>Approved Premium</Typography></Link>
    const ApprovedContact = <Link to="ApprovedContact"><Typography> contact Request</Typography></Link>
   

    const Logout = <Typography> Logout</Typography>


    const HandleLogout = () => {
        logOut()
            .then()
            .catch()
        Naviget('/')
    }


    return (

        <Box>
            <List>
                {[Home, EditBiodata, ManageUsers, ApprovedPremium, ApprovedContact].map((text, index) => (
                    <ListItem key={text}  disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 6 === 0 ? < HomeIcon></HomeIcon> : ""}
                                {index % 6 === 1 ? <EditRoadIcon></EditRoadIcon> : ""}
                                {index % 6 === 2 ? < PreviewIcon></PreviewIcon> : ""}
                                {index % 6 === 3 ? <RequestPageIcon></RequestPageIcon> : ""}
                                {index % 6 === 4 ? <BookmarkAddIcon sx={{border:1}}></BookmarkAddIcon> : ""}
                                {index % 6 === 5 ? <SupervisorAccountIcon></SupervisorAccountIcon> : ""}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{}}>
                {[Logout].map((text, index) => (
                    <ListItem
                        onClick={HandleLogout}
                        key={text}
                        disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 3 === 0 ? <LogoutIcon></LogoutIcon> : ''}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default AdminSidber;