import { useEffect, useState } from "react";
import { getusers } from "../../Api/auth";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ManageUserCard from "./ManageuserCard/ManageUserCard";


const ManageUsersPage = () => {
    const [Data, setdata] = useState()

    useEffect(() => {

        try {
            getusers()
                .then(data => {
                    setdata(data)
                })
        } catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontSize:19}}> User Email </TableCell>
                            <TableCell sx={{fontSize:19}} align="right"> User Name</TableCell>
                            <TableCell sx={{fontSize:19}} align="right"></TableCell>
                            <TableCell sx={{fontSize:19}} align="right">Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Data?.map(item => <ManageUserCard key={item._id} item={item}></ManageUserCard>)
                        }

                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
};

export default ManageUsersPage;