import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Profile from '../CustomComponents/Profile';
import AddIcon from '@mui/icons-material/Add';


const FeedCrad = ({url,name,desc}:any) => {
    return (
        <div className="flex item-center flex-row gap-2 justify-center mt-1 mb-1 p-1 w-[100%]">
            <div className="flex flex-row items-center w-[95%] mt-1">
            <div className="item-center justify-center w-[20%]">
                <Profile 
                w={40}
                h={40}
                url={url}
                />
            </div>
            <div className="flex flex-col items-start w-[50%] ">
                <p className='text-[15px] font-semibold text-gray-800'>{name}</p>
                <p className='text-[11px]  text-gray-600'>{desc}</p>
            </div>
            <div className="flex  items-center  rounded-md ">
                <div className="flex items-center flex-row gap-1 bg-blue-100 p-1 rounded-2xl pl-1 pr-2 cursor-pointer hover:bg-blue-200 hover:text-white">
                <AddIcon  className='text-gray-600' style={{width:15,height:15}}/>
                <p className='text-[12px]  text-gray-600'>Follow</p>
                </div>
            </div>
            </div>
        </div>
    )
}

function Feed() {
  return (
    <div className="w-[100%] p-2 mt-[10px] items-center flex flex-col ">
        <div className="flex flex-col bg-white p-2 w-full rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
                <p className='text-md font-semibold text-gray-800'>Add your Feed</p>
                <BakeryDiningIcon  className='text-gray-400'/>
            </div>
            <div className="mt-4">
                <FeedCrad name={"Lex Fridman"}  desc={"Research Scientist, MIT"} url={"https://media.licdn.com/dms/image/C4E03AQHLCrHhGZ0xMg/profile-displayphoto-shrink_200_200/0/1519486751908?e=1717027200&v=beta&t=VENapJMrNgV1RRMWUncVEJuWh-VH1JDom88TYoYCXW8"}/>
                <FeedCrad name={"freeCodeCamp"}  desc={"Research Scientist, MIT"} url={"https://media.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1720051200&v=beta&t=F-tTN1M2eWyeNoUGxWhQJrysRrQonck2PJJUxEpaf4c"}/>
                <FeedCrad name={"Enzo Manuel Mangano"}  desc={"Co-Founder & Software ..."} url={"https://media.licdn.com/dms/image/C4D03AQE5jej68aK11A/profile-displayphoto-shrink_200_200/0/1576346795757?e=1717027200&v=beta&t=s7y_S70EbxL8YUCqvWLacbO_By22PG4kwToVBswyYqo"}/>
            </div>
        </div>
    </div>
  )
}

export default Feed
