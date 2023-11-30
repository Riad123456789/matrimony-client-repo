import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getAlldata } from "../../Api/Biodata";
import { useEffect, useState } from "react";
import PremiumCard from "./premiumCard/premiumCard";

const ApprovedPremium = () => {

    const [Data, setdata] = useState()

    useEffect(() => {
        getAlldata()
            .then(data => {
                const Filtered = data.filter(item => item.BiodataStatas === "request")
                setdata(Filtered)

            })

    }, [])

    return (
        <div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Biodata Id</TableCell>
                            <TableCell align="right">Make Premium</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Data?.map(item => <PremiumCard key={item._id} data={item}></PremiumCard>)
                        }

                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
};

export default ApprovedPremium;