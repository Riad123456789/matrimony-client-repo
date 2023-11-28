/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from '@mui/material';


const ContuctsRewCard = ({ item }) => {


    const { Name, Email, Mobile_Number, Biodataid, email, statas } = item
    return (
        <TableRow
            key={Email}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {Name}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{Biodataid}</TableCell>
            <TableCell align="right">{Mobile_Number}</TableCell>
            <TableCell align="right">{statas}</TableCell>
            <TableCell align="right"><Button>Delete</Button></TableCell>
        </TableRow>
    );
};

export default ContuctsRewCard;