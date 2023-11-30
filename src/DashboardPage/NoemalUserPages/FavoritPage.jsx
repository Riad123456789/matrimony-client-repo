import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import FavoritBiodataCard from "./FavoritBiodataCard/FavoritBiodataCard";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Allfavorite } from "../../Api/Biodata";


const FavoritPage = () => {

    const { user } = useContext(AuthContext)
    const [Data, setdata] = useState()

    useEffect(() => {

        Allfavorite()
            .then(data => {
               
                if (user?.email) {
                    const Filtered = data.filter(item => item.User === user?.email)
                    setdata(Filtered)
                }
            })

    }, [user?.email])


    return (
        <div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Biodata Id</TableCell>
                            <TableCell align="right">Permanent Address</TableCell>
                            <TableCell align="right">Occupation</TableCell>
                            <TableCell align="right">Delete Request</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Data?.map(item => <FavoritBiodataCard key={item._id} data={item}></FavoritBiodataCard>)
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
};

export default FavoritPage;