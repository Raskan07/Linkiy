import SearchIcon from '@mui/icons-material/Search';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import Avatar from './avatar';
import BussinesBtn from './bussinesBtn';

function Header() {
    const links = [
        {
            title:"Home",
            path:"",
            component: <SearchIcon  style={{color:"gray"}}/>,
            id:"001"
        },
        {
            title:"My Networks",
            path:"",
            component: <PodcastsIcon style={{color:"gray"}} />,
            id:"001"
        },
        {
            title:"Jobs",
            path:"",
            component: <BusinessCenterIcon  style={{color:"gray"}}/>,
            id:"001"
        },
        {
            title:"Messaging",
            path:"",
            component: <MessageIcon  style={{color:"gray"}}/>,
            id:"001"
        },
        {
            title:"Notification",
            path:"",
            component: <NotificationAddIcon style={{color:"gray"}} />,
            id:"001"
        },
    ]
  return (
    <div className="w-screen p-1 bg-white mt-0  flex flex-row justify-around top-0 sticky">

        {/* logo and search bar */}
        <div className="flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
            <div className="pl-2 pr-2  bg-slate-200 items-center pt-0 pb-0 h-8 justify-center flex rounded-md">
                <SearchIcon  style={{color:"gray"}}/>
                <input  placeholder='Search' className='bg-slate-200 pl-1 pr-1'/>
            </div>
        </div>

        {/* Naviagtion path user profile path tabs */}
        <div className="flex flex-row">
            <ul className='flex flex-row items-center gap-2'>
                {
                    links.map((item,index) => (
                        <div key={item.id + index} className='flex flex-col items-center p-1 pl-2 pr-2 cursor-pointer hover:scale-105'>
                            {item.component}
                            <p className='text-gray-600 text-[12px] font-normal '>{item?.title}</p>
                        </div>
                    ))
                }
                <Avatar w={30} h={30} title={"Me"} />
            </ul>
        </div>

        <div className="flex flex-row items-center mt-2 gap-3">
            <BussinesBtn title={"Bussines"}/>
            <p className='text-amber-600 text-[14px] cursor-pointer hover:scale-105'>Try Premium <br/> for LKR0</p>
        </div>



    </div>
  )
}

export default Header
