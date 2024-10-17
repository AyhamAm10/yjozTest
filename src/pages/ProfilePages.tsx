import  { useEffect, useState } from 'react'
import { profilePageList } from '../content'
import { Link } from 'react-router-dom'
import { Route, Routes, useLocation } from "react-router";
import Main from './profile/Main';
import Items from './profile/Items';
import AddNewItem from './profile/AddNewItem';
import Favorites from './profile/Favorites';
import AddressPage from './profile/AddressPage';
import Programe from './profile/Programe';
const ProfilePages = () => {
    const [asideList , setAsideList] = useState(profilePageList)
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname.split("/").pop();
        const newData = asideList.map((item) =>
          item.link === currentPath 
            ? { ...item, active: true }  
            : { ...item, active: false } 
        );
        setAsideList(newData); 
      }, [location]);
  return (
    <div className='min-h-screen relative '>
        <aside className='hidden sm:block z-20 px-3 pt-5 pb-20 lg:w-24 xl:w-32 bg-white absolute  '>
            <ul className='flex flex-col items-end gap-12'>
                {
                    asideList.map((item)=>(
                        <Link key={item.id} to={item.link}>
                            <li>
                                <img src={item.active? item.activeIcon : item.icon} alt="" /> 
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </aside>
        <main className='py-4 sm:py-6 lg:py-8 px-3 md:px-6 lg:pl-9 sm:ml-16 md:ml-20   lg:max-w-[90rem] md:max-w-[75rem] mx-auto max-w-[80rem] '>
                <Routes>
                    <Route path='home' element={<Main/>} />
                    <Route path='myItems' element={<Items/>} />
                    <Route path='add_item' element={<AddNewItem/>} />
                    <Route path='favorites' element={<Favorites/>} />
                    <Route path='Addresses' element={<AddressPage/>} />
                    <Route path='programe' element={<Programe/>} />
                </Routes>
        </main>
    </div>
  )
}

export default ProfilePages