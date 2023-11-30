import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { approvedrequest } from '../../../Api/Biodata';

export default function BasicTable({ item }) {


    const { _id, Name, email, Biodataid, selfBiodataId, statas } = item


    const handleclick = (id) => {
        const update = {
            statas: "approved",
        }
        approvedrequest(id, update).then(data => {
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
                {Name}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{selfBiodataId}</TableCell>
            <TableCell align="right"><Button onClick={() => handleclick(_id)} variant="contained">approves</Button></TableCell>
        </TableRow>

    );
}