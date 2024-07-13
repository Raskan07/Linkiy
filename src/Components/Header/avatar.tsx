import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyAvatar from '../CustomComponents/avatar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import {signOut} from "firebase/auth"
import {auth} from "../../api/firebase"
import { useNavigate } from 'react-router-dom';

function Avatar({w=20,h=20,title}:any) {
    const [isToggleOpen,setToggleOpen] = useState(false);
    const user = useSelector(selectUser);
    const dispacth = useDispatch()
    const navigate = useNavigate()


    const SignOut = () => {
      dispacth(logout());
      signOut(auth)
      navigate("/login")
    }
  return (
    <div onClick={() => setToggleOpen(prv => !prv)}  className="flex flex-col items-center p-1 pl-2 pr-2 cursor-pointer">
        <MyAvatar w={w} h={h}/>
      <div className="flex flex-row gap-1 items-center">
        <p className="text-gray-600 text-[12px] font-normal">{title}</p>
        <KeyboardArrowDownIcon className='w-[10px] h-[10px] text-gray-600'/>
      </div>

      {/* Dropdown Menu */}

      <div className={`w-[250px] h-[400px] absolute top-20 bg-white ${isToggleOpen ? "flex" : "hidden"} rounded-sm shadow-lg items-start justify-start`}>
        <div className="flex items-center flex-col p-2">

          <div className="flex flex-row items-center w-[100%]">
            <MyAvatar w={60} h={60} b={2} />
            <div className="flex flex-col ml-3 items-start w-[75%]">
              <div className="text-gray-900 font-bold capitalize">{user?.name}</div>
              <div className="text-gray-700 text-[12px]">React Native and React Devloper | junior Frontend Devevloper</div>
            </div>
          </div>

          <button className=' p-1  font-semibold text-sm  mt-2 bg-white text-blue-600 w-[90%] items-center justify-center border border-blue-500 rounded-full hover:bg-blue-100'>View Profile</button>

          <div className="mt-3 mb-3 h-[1px] bg-gray-100 w-full "></div>

            {/* Setting */}

          <ul className='flex items-start flex-col justify-start w-full pl-2'>
            <p className='text-gray-900 font-bold'>Account</p>
            <li className='pt-1 pb-1 text-gray-500 text-sm '>Setting & Privacy</li>
            <li className='pt-1 pb-1 text-gray-500 text-sm '>Help</li>
            <li className='pt-1 pb-1 text-gray-500 text-sm '>Language</li>
          </ul>

          <div className="mt-2 mb-2 h-[1px] bg-gray-100 w-full "></div>

            {/* Manage */}
          <ul className='flex items-start flex-col justify-start w-full pl-2'>
            <p className='text-gray-900 font-bold'>Manage</p>
            <li className='pt-1 pb-1 text-gray-500 text-sm capitalize '>post & activity</li>
            <li className='pt-1 pb-1 text-gray-500 text-sm '>Job Posting account</li>
          </ul>

          <div className="mt-2 mb-2 h-[1px] bg-gray-100 w-full "></div>

          <p onClick={SignOut} className=' text-start w-[92%]  flex pt-1 pb-1 text-gray-500 text-sm underline '>Sign out</p>

        </div>
      </div>
    </div>
  )
}

export default Avatar
