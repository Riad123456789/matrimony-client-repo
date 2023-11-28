import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

export default function BasicTable({ item }) {


    const { Name, Email, Biodataid } = item
    return (

        <TableRow
            key={Email}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {Name}
            </TableCell>
            <TableCell align="right">{Email}</TableCell>
            <TableCell align="right">{Biodataid}</TableCell>
            <TableCell align="right"><Button>approves</Button></TableCell>
        </TableRow>

    );
}