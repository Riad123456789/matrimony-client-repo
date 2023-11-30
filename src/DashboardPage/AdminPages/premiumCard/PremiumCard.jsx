/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from '@mui/material';
import { AlldataRequest } from '../../../Api/Biodata';
import { a } from '@react-spring/web';


const PremiumCard = ({ data }) => {

    const { _id, Name, Email, Biodataid, BiodataStatas } = data

    // console.log(BiodataStatas)


    const handleClick = (id) => {

        const update = {
            BiodataStatas: "Premium",
        }
        AlldataRequest(id, update).then(data => {
            if(data.matchedCount == 1){
                alert('success')
            }
        })
    }


    return (
        <TableRow
            key={Name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {Name}
            </TableCell>
            <TableCell align="right">{Email}</TableCell>
            <TableCell align="right">{Biodataid}</TableCell>
            <TableCell align="right"><Button onClick={() => handleClick(_id)}>Make Premium</Button></TableCell>
        </TableRow>

    );
};

export default PremiumCard;