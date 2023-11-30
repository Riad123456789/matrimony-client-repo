import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../../SharedComponent/Navbar";
import Footer from "../../../SharedComponent/Footer";
import { useContext, useEffect, useState } from "react";
import { favoriteBiodata, getAlldata, } from "../../../Api/Biodata";
import SimilerBiodataCard from "./SimilerBiodataCard";
import { AuthContext } from "../../../provider/AuthProvider";
import useRole from "../../../hooks/useRole";


const SingleDatapage = () => {

    const { _id,
        Biodataid,
        Email,
        Type,
        Name,
        Date_of_birth,
        Height,
        Weight,
        Age,
        Photo,
        Occupation,
        Race,
        Permanent_Division,
        Present_Division,
        Expected_Partner_Age,
        Expected_Partner_Height,
        Expected_Partner_Weight,
        Mobile_Number,
    } = useLoaderData()

    const [type, settype] = useState()
    const { user } = useContext(AuthContext)
    const email = user?.email
    const [role] = useRole()
    const navigate = useNavigate()

    useEffect(() => {
        getAlldata()
            .then(data => {
                if (Type) {

                    const Filtered = data.filter(item => item.Type === Type)
                    settype(Filtered)
                }
            })
    }, [Type])



    const HandleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            Email: Email,
            User: email,
            Biodataid: Biodataid,
            Type: Type,
            Name: Name,
            Date_of_birth: Date_of_birth,
            Height: Height,
            Weight: Weight,
            Age: Age,
            Photo: Photo,
            Occupation: Occupation,
            Race: Race,
            Permanent_Division: Permanent_Division,
            Present_Division: Present_Division,
            Expected_Partner_Age: Expected_Partner_Age,
            Expected_Partner_Height: Expected_Partner_Height,
            Expected_Partner_Weight: Expected_Partner_Weight,
            Mobile_Number: Mobile_Number,
        }

        try {
            await favoriteBiodata(data)
            alert('success')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" md:flex ">

                <div className="ml-32 flex-1">
                    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 w-full h-72 object-contain rounded-t-lg" src={Photo} alt="product image" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Type}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="text-base text-red-700"> Date of birth : </span>{Date_of_birth}</p>

                            <div>
                                {role === 'premium' &&
                                    <p>{Email}</p>

                                }
                                {role === 'premium' &&
                                    <p>{Mobile_Number}</p>

                                }
                            </div>
                            <div className="flex justify-between ">


                                {
                                    role === 'premium' && 'Normal' &&

                                    <button onClick={HandleSubmit} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to favourites</button>
                                }




                                {role === 'Normal' &&
                                    <Link to={`/Checkout/:${Biodataid}`}>
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request Contact Information</button></Link>
                                }

                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex-1 ">
                    <div>
                        {type?.slice(0, 1).map(item => <SimilerBiodataCard key={item._id} item={item}></SimilerBiodataCard>)}
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div >
    );
};

export default SingleDatapage;