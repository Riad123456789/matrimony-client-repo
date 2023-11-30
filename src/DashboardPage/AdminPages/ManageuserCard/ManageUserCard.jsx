/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { MakeAdmin } from "../../../Api/Biodata";


const ManageUserCard = ({ item }) => {

    const { _id, email, role, Name } = item



    const handleAdmin = (id) => {
        const update = {
            role: "Admin",
        }
        MakeAdmin(id, update).then(data => {
            console.log(data)
            if (data.modifiedCount == 1) {
                alert('success')
            }
        })
    }




    const handlepremium = (id) => {
        const update = {
            role: "premium",
        }
        MakeAdmin(id, update).then(data => {
            console.log(data)
            if (data.modifiedCount == 1) {
                alert('success')
            }
        })
    }
    

    return (
        <TableRow
            key={email}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {email}
            </TableCell>
            <TableCell align="right">{Name}</TableCell>
            <TableCell align="right" >

                {
                    role === "Admin" ? <></> :
                        <>
                            <Button onClick={() => handleAdmin(_id)} sx={{ mr: 2 }} variant="contained">
                                Make admin
                            </Button>
                            <Button onClick={()=>handlepremium(_id)} variant="contained">
                                Make premium
                            </Button>
                        </>
                }

            </TableCell>
            <TableCell align="right">{role}</TableCell>

        </TableRow>

    );
};

export default ManageUserCard;