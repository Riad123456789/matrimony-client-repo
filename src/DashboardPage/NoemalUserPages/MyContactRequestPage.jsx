import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAllRequestInfo } from "../../Api/payment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ContuctsRewCard from "./contuctsReqCard/ContuctsRewCard";


const MyContactRequestPage = () => {

    const { user } = useContext(AuthContext)
    const [Data, setdata] = useState()

    useEffect(() => {
        getAllRequestInfo()
            .then(data => {
                if (user.email) {
                    const Filtered = data.filter(item => item.Email === user.email)
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
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">Mobile Number</TableCell>
                            <TableCell align="right">statsus</TableCell>
                            <TableCell align="right">Delete Request</TableCell>
                          

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Data?.map(item => <ContuctsRewCard key={item._id} item={item}></ContuctsRewCard>)
                        }

                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
};

export default MyContactRequestPage;