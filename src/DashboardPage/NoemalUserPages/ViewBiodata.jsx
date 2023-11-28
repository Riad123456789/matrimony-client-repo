import { useContext, useEffect, useState, } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import { getAlldata } from "../../Api/Biodata";
import BiodataCard from "./BiodataCard/BiodataCard";



const ViewBiodata = () => {

    const { user } = useContext(AuthContext)
    const [biodata, setbiodata] = useState()


    useEffect(() => {
        getAlldata()
            .then(data => {
                if (user.email) {

                    const Filtered = data.filter(item => item.Email === user.email)
                    setbiodata(Filtered)
                }

            })

    }, [user?.email])


    // console.log(biodata, user.email)

    return (
        <div>
         {biodata?.map(item => <BiodataCard key={item._id} biodata={item} ></BiodataCard>)}
        </div>
    );
};

export default ViewBiodata;