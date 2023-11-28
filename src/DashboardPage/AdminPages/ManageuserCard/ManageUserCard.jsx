import { TableCell, TableRow } from "@mui/material";


const ManageUserCard = ({ item }) => {

    const { email, role } = item
    return (
        
            <TableRow
                key={email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {email}
                </TableCell>
                <TableCell align="right">{role }</TableCell>
                <TableCell align="right">{role }</TableCell>
              
            </TableRow>
      
    );
};

export default ManageUserCard;