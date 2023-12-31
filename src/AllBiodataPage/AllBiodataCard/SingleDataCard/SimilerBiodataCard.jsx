

const SimilerBiodataCard = ({ item }) => {

    const { Email, Type,Photo,Biodataid,Permanent_Division } = item

    console.log(item)

    return (
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
                  
                </div>
            </div>

        </div>
    );
};

export default SimilerBiodataCard;