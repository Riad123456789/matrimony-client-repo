/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AlldataRequest } from '../../../Api/Biodata';
import { Link } from 'react-router-dom';




const BiodataCard = ({ biodata }) => {

    const { _id,
        Email,
        Photo,
        BiodataStatas,
        Name,
        Type,
        Date_of_birth,
        Height,
        Weight,
        Age,
        Occupation,
        Race,
        Permanent_Division,
        Present_Division,
        Expected_Partner_Age,
        Expected_Partner_Height,
        Expected_Partner_Weight,
        Mobile_Number,
        Biodataid } = biodata



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    // console.log(biodata)

    const HandleRequest = (id) => {

        const update = {
            BiodataStatas: "request",
        }

        AlldataRequest(id, update).then(data => {

            console.log(data)

            if (data.modifiedCount == 1) {
                alert('success')
            }
        })
    }

    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Photo} alt="Bonnie image" />

                    <div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> Name: {Name}</h5>
                        <div className="text-lg text-red-900 font-semibold ">Type :  {Type}</div>
                        <div className="text-lg text-red-900 font-semibold ">Biodataid :  <span className='text-xl text-black'>{Biodataid}</span></div>
                        <div className="text-lg text-red-900 font-semibold ">Date of birth : <span className='text-xl text-black'>{Date_of_birth}</span></div>
                        <div className="text-lg text-red-900 font-semibold ">Height :   <span className='text-xl text-black'>{Height}</span> ft</div>
                        <div className="text-lg text-red-900 font-semibold "> Weight :  <span className='text-xl text-black'>{Weight}</span>kg</div>
                        <div className="text-lg text-red-900 font-semibold ">Age : <span className='text-xl text-black'>{Age}</span></div>
                        <div className="text-lg text-red-900 font-semibold "> Occupation : <span className='text-xl text-black'>{Occupation}</span></div>
                        <div className="text-lg text-red-900 font-semibold "> Race : <span className='text-xl text-black'>{Race}</span></div>
                        <div className="text-lg text-red-900 font-semibold "> Present Division : <span className='text-xl text-black'>{Permanent_Division}</span></div>
                        <div className="text-lg text-red-900 font-semibold "> Permanent Division : <span className='text-xl text-black'>{Permanent_Division}</span></div>
                        <div className="text-lg text-red-900 font-semibold "> Expected Partner_Age : <span className='text-xl text-black'>{Expected_Partner_Age}</span></div>
                        <div className="text-lg text-red-900 font-semibold ">Expected Partner Height : <span className='text-xl text-black'>{Expected_Partner_Height}</span>ft</div>
                        <div className="text-lg text-red-900 font-semibold "> Expected Partner Weight :     <span className='text-xl text-black'>{Expected_Partner_Weight}</span>Kg</div>
                        <div className="text-lg text-red-900 font-semibold ">  Mobile Number : <span className='text-xl text-black'>{Mobile_Number}</span></div>
                    </div>
                    <div>
                        <div>
                            <div onClick={handleOpen} className="flex mt-4 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {BiodataStatas === "Premium" ? "Premium" : "make premium"} </a>
                            </div>
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                        Are you sure to make your biodata premium ??????
                                    </Typography>
                                    <div className='flex justify-center '>
                                        <div onClick={() => HandleRequest(_id)} className="flex mt-4 md:mt-6">
                                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <Link to={'/dashboardLayout/ViewBiodata'}> Yes</Link> </a>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataCard;






