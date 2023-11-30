import { Link } from "react-router-dom";


const AllBiodataCard = ({ alldata }) => {

    const { _id, Email, Photo,Biodataid ,Permanent_Division,Type} = alldata


    // console.log(alldata)
    return (


        // <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //     <a href="#">
        //         <img src={Photo} alt="" />
        //     </a>
        //     <div className="p-5">
        //         <a href="#">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        //         </a>
        //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

        //         <div>
        //             <button className=""><Link to={`/singlebiodata/${_id}`}> View profile</Link></button>
        //         </div>
        //     </div>
        // </div>


        <div>
                     <div className="w-full m-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="">
                    <img className="p-4 w-full h-72 object-contain rounded-t-lg" src={Photo} alt="product image" />
                </div>
                <div className="px-5 pb-5">
                    <div className="flex gap-10">
                        <p>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                 <span className="text-orange-600"> Biodata Type :</span> {Type}</h5>
                        </p>
                        <p>
                            <h5 className="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white">
                                 <span className="text-orange-600"> Biodataid:</span> {Biodataid}</h5>
                        </p>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">

                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900 dark:text-white">
                            <span className="text-lime-600">Permanent Division :</span> {Permanent_Division}</span>
                        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to={`/singlebiodata/${_id}`}>View Profile</Link> </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllBiodataCard;
