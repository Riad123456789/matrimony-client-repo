import { useLoaderData } from "react-router-dom";
import Footer from "../SharedComponent/Footer";
import Navbar from "../SharedComponent/Navbar";
import AllBiodataCard from "./AllBiodataCard/AllBiodataCard";


const AllBiodata = () => {

    const data = useLoaderData()

    // console.log(data)
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid gap-7 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map(item => <AllBiodataCard key={item._id} alldata={item}></AllBiodataCard>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBiodata;