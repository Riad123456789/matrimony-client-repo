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


            <div className="navbar grid gap-15  grid-cols-3  bg-red-500 p-5">
                <div className="m-auto">
                    <select className="input input-bordered py-2 px-20">
                        <option selected >Type </option>
                        <option > male  </option>
                        <option >female  </option>

                    </select>
                </div>
                <div className="m-auto">
                    <select className="input input-bordered  py-2 px-20">
                        <option disabled selected >Division  </option>
                 
                    </select>
                </div>
                <div className="m-auto">
                    <select className="input input-bordered  py-2 px-20">
                        <option disabled selected > Age </option>
                   
                    </select>
                </div>
            </div>

            <div className="grid gap-7 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map(item => <AllBiodataCard key={item._id} alldata={item}></AllBiodataCard>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBiodata;