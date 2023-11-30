/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from '@mui/material';
import { deleteRequestBiodata } from '../../../Api/Biodata';


const ContuctsRewCard = ({ item }) => {


    const { _id, Name, Email, Mobile_Number, Biodataid, selfBiodataId, email, statas } = item


    const handledelete = (id) => {
        try {
            deleteRequestBiodata(id)
                .then(data => {
                    console.log(data)
                })
        } catch {
            (error) => {
                console.log(error)
            }
        }
    }

    return (
        <TableRow
            key={Email}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {Name}
            </TableCell>
            <TableCell align="right">{selfBiodataId}</TableCell>
            <TableCell align="right">{statas}</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right"><Button onClick={() => handledelete(_id)} variant="contained">Delete</Button></TableCell>
        </TableRow>
    );
};

export default ContuctsRewCard;