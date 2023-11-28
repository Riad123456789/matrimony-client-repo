import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { AllfavoriteBiodata } from "../../Api/Biodata";
import FavoritBiodataCard from "./FavoritBiodataCard/FavoritBiodataCard";


const FavoritPage = () => {

    const { user } = useContext(AuthContext)
    const [Data, setdata] = useState()

    try {
        AllfavoriteBiodata(user?.email).then(data => {
            setdata(data)
        })

    } catch {
        (error) => {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    Data?.map(item => <FavoritBiodataCard key={item._id} data={item}></FavoritBiodataCard>)
                }
            </div>
        </div>
    );
};

export default FavoritPage;