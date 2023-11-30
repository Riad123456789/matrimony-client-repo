
import Footer from "../SharedComponent/Footer";
import Navbar from "../SharedComponent/Navbar";
import AllBiodataCard from "./AllBiodataCard/AllBiodataCard";
import { useState } from "react";
import { getAlldatafilter } from "../Api/Biodata";


const AllBiodata = () => {

    const [FilterData, setFilterdata] = useState([])
    const [Data, setdata] = useState('')
    const [Division, setDivision] = useState('')
    const [Age, setAge] = useState('')

    try {
        getAlldatafilter(Data, Division, Age).then(data => {

            setFilterdata(data)
        })
    } catch (error) {
        console.log(error)
    }


    // console.log(data)

    return (
        <div>
            <Navbar></Navbar>


            <div className="navbar grid gap-15  grid-cols-3  bg-red-500 p-5">
                <div className="m-auto">
                    <select onChange={(e) => setdata(e.target.value)} className="input input-bordered py-2 px-20">
                        <option selected >Type </option>
                        <option > Male  </option>
                        <option >Female  </option>

                    </select>
                </div>
                <div className="m-auto">
                    <select onChange={(e) => setDivision(e.target.value)} className="input input-bordered  py-2 px-20">
                        <option disabled selected >Division  </option>
                        <option >Dhaka </option>
                        <option >Chattragram</option>
                        <option >Rangpur</option>
                        <option >Barisal</option>
                        <option >Khulna</option>
                        <option >Maymansign</option>
                        <option >Sylhet</option>

                    </select>
                </div>
                <div className="m-auto">
                    <span className="font-semibold pr-2"> Age :</span>
                    <input onChange={(e) => setAge(e.target.value)} defaultValue={"Age"} className="input input-bordered  py-2 px-15" type="number" />
                </div>
            </div>

            <div className="grid gap-7 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {FilterData?.slice(0,20).map(item => <AllBiodataCard key={item._id} alldata={item}></AllBiodataCard>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBiodata;