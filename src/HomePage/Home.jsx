
import { getAlldata } from '../Api/Biodata';
import img from '../assets/beautiful-woman-jumping-mountains-sunset-3d-rendering-party-girl_944525-778.jpg'
import { useEffect, useState } from 'react';
import HomeCard from './HomeCard/HomeCard';




const Home = () => {
  const [Data, setdata] = useState()

  useEffect(() => {

    getAlldata()
      .then(data => {
        // console.log(data)
        const Filtered = data.filter(item => item.BiodataStatas === 'Premium')
        setdata(Filtered)
      })
  }, [])
  // console.log(Data)

  return (
    <div>
      <img className='w-full sm:h-[80vh]  md:h-[90vh] ' src={img} alt="" />
      <div className=' mt-5'>
        <p className='text-center text-xl  font-extrabold md:text-3xl text-red-600'>---------The premium member Card----------</p>
        <div className='p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-4'>
          {
            Data?.slice(0, 6).map(item => <HomeCard key={item._id} data={item}></HomeCard>)
          }
        </div>

      </div>
    </div>
  );
};

export default Home;