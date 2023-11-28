import { useLoaderData } from "react-router-dom";
import ContuctsCard from "./ContuctsCard/ContuctsCard";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const ContuctsReqPage = () => {

    const Data = useLoaderData()

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">statsus</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Data?.map(item => <ContuctsCard key={item._id} item={item}></ContuctsCard>)
                    }

                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default ContuctsReqPage;

