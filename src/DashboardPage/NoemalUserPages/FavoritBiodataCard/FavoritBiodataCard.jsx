import { Button, TableCell, TableRow } from "@mui/material";
import { deletefavoriteBiodata } from "../../../Api/Biodata";


const FavoritBiodataCard = ({ data }) => {

    const { _id, Name, Biodataid, Permanent_Division, Occupation } = data


    const handledelete = (id) => {
        try {
            deletefavoriteBiodata(id)
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
            key={_id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {Name}
            </TableCell>
            <TableCell align="right">{Biodataid}</TableCell>
            <TableCell align="right">{Permanent_Division}</TableCell>
            <TableCell align="right">{Occupation}</TableCell>
            <TableCell align="right"><Button onClick={() => handledelete(_id)} variant="contained">Delete</Button></TableCell>
        </TableRow>
    );
};

export default FavoritBiodataCard;