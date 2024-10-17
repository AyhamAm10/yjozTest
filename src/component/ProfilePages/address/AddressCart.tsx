import React from 'react'
import map from "../../../assets/profilePage/newItem/Rectangle 34 (1).png"
const AddressCart = () => {
  return (
    <div className='w-[21rem] sm:w-[18rem] min-h-[21rem] py-6 px-3 rounded-md shadow-lg flex flex-col gap-6 '>
        <div className='w-full text-[1rem] text-red font-semibold flex items-center justify-between'><h3 className='text-dark'>Home</h3> <h3>Default</h3></div>
        <p className='text-sm font-normal text-[#B0B0B0] pr-4'>Lorem ipsum dolor sit amet consectetur. Velit ut malesuada id.</p>
        <img src={map} alt="map" />
        <div className='w-full flex justify-between'>
        <button className='text-white bg-[#959695] w-[7rem] text-center py-2 rounded-md'>Edit</button>
        <button className='text-white bg-[#E9233A] w-[7rem] text-center py-2 rounded-md'>Delete</button>
        </div>
    </div>
  )
}

export default AddressCart