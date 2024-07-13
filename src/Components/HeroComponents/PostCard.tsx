import { useState } from 'react'
import Profile from '../CustomComponents/Profile'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';


const PostElementBtn = ({icon,title}:any) => {
    return (
        <div className='flex flex-row p-3 items-center gap-1 hover:rounded-md hover:bg-slate-200 pl-5 pr-5'>
            {icon}
            <p className='text-[16px] font-bold text-gray-500'>{title}</p>
        </div>
    )
}

function PostCard({post}:any) {
    const [flowing,setFlowing] = useState(false)
    
  return (
    <div className='mt-[5px] pt-2 rounded-md bg-white flex flex-col items-start shadow-md '>

        {/* headerBar */}
        <div className="flex flex-row items-center p-2"> 

            <div className="flex flex-row items-center">
            <Profile url={`${post?.username_profile_uri}`} w={40} h={40} />
            <div className='flex flex-col items-start pl-5'>
            <div className="flex flex-row items-center gap-2">
                <p className='text-black text-sm font-bold '>{post?.username}</p>
                <FiberManualRecordIcon style={{width:5,height:5,color:"#000"}}/>
                {flowing && <p className="text-gray-500 text-sm">Flowing.</p>}
            </div>
            <p className='text-[12px] text-gray-900 mt-1 font-semi w-[60%]'>Vacancies is a free job posting and online resume database search ...</p>
            <div className="flex flex-row gap-1 items-center mt-1">
            <PublicIcon style={{width:17,height:17,color:"gray"}}/>
            <FiberManualRecordIcon style={{width:5,height:5,color:"gray"}}/>
            <p className='text-[12px] text-gray-600'> 6h</p>
            </div>
            </div>
            </div>

            {flowing == !true && //flowing icon
            <div className="flex flex-row item-center gap-1 cursor-pointer pl-20">
                <AddIcon style={{width:25,height:25}} className='text-blue-600'/>
                <p className='text-blue-600 font-bold text-md'>Follow</p>
            </div>}            
        </div>

        {/* caption or articles */}
        <p className='text-gray-800 text-sm pl-3 pr-3 pb-2 pt-2 mt-0'>
           {post?.message}
        </p>
        {/* Post Image or Video or else */}
        <img 
        src={`${post?.post_image}`} 
        alt="post" 
        className="w-full mt-1 h-[350px] object-cover" />

        <div className="flex flex-col w-[90%] item-start mt-2">

            <div className="flex flex-row items-center justify-between">
                <div className='flex flex-row gap-1 pl-3'>
                    <ThumbUpIcon  className='p-1 items-center bg-green-500 rounded-full' style={{width:20,height:20}}/>
                    <p className='text-gray-600 text-[12px]'>227</p>
                </div>
                <p className='text-gray-600 text-[12px] pl-6'>2 reposts</p>
            </div>

            <div className="flex flex-row mt-1 items-center justify-between ml-5">
                <PostElementBtn icon={<ThumbUpOffAltIcon  className='text-gray-500'/>} title={"Like"}/>
                <PostElementBtn icon={<MessageIcon  className='text-gray-500'/>} title={"Comments"}/>
                <PostElementBtn icon={<LinkIcon  className='text-gray-500'/>} title={"Repost"}/>
                <PostElementBtn icon={<SendIcon  className='text-gray-500'/>} title={"Like"}/>
            </div>
        </div>
    </div>
  )
}

export default PostCard
