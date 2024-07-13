import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MyAvatar from "../CustomComponents/avatar";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


function ProfileCard() {
  const user = useSelector(selectUser);
  return (
    <div className="w-full mt-[10px]  bg-white rounded-md">

        {/* Profile card */}
      <img 
      className="w-[100%] h-[75px] rounded-md "
      src="https://media.licdn.com/dms/image/D5616AQEEqgJLUtIExQ/profile-displaybackgroundimage-shrink_350_1400/0/1711353037849?e=1717027200&v=beta&t=cm920WA2HBoaE2RHvOWdYNGB8o9uKe4Qx5zFMKPHftg" 
      alt="" 
      />
      <div className="w-[100%] items-center flex justify-center mt-[-45px] cursor-pointer">
        <MyAvatar w={70} h={70} b={2}/>
      </div>

      <div className="w-full flex-col flex items-center justify-center mt-4 mb-4">
        <h3 className="text-[#000] text-lg font-bold">{user?.name}</h3>
        <p className="text-gray-600 w-[85%] text-sm justify-evenly text-center">
            React and React native Developer | Junior Front-end Developer | UI Designer
        </p>
      </div>

      {/* Divided bar */}
      <div className="w-full h-[1px] bg-gray-300 mb-2"></div>

      {/* Conection card */}

      <div className="w-full mt-4 items-center flex flex-row justify-around mb-3 cursor-pointer">
        <div className="flex flex-col pr-4">
            <p className="text-sm font-bold text-gray-600">connection</p>
            <p className="text-sm font-semibold text-black">Grow your Network</p>
        </div>
        <ControlPointDuplicateIcon className="text-gray-600"/>
      </div>

        {/* Divided bar */}
      <div className="w-full h-[1px] bg-gray-300 mb-2"></div>

      {/* My Items card */}

      <div className="w-full mt-4  flex flex-row  mb-3 cursor-pointer items-start pl-5 gap-5">
        <BookmarkIcon className="text-gray-600"/>
        <p className="text-sm font-semibold text-black">My Items</p> 
      </div>


    </div>
  )
}

export default ProfileCard
