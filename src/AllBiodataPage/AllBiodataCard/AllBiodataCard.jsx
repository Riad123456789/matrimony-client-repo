import { Link } from "react-router-dom";


const AllBiodataCard = ({ alldata }) => {

    const { _id, Email, Photo } = alldata


    // console.log(alldata)
    return (


        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img src={Photo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                <div>
                    <button className=""><Link to={`/singlebiodata/${_id}`}> View profile</Link></button>

                </div>
            </div>
        </div>

    );
};

export default AllBiodataCard;
