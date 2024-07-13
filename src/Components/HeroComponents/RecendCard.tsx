import GroupsIcon from '@mui/icons-material/Groups';

const RecentItem = ({icon,title}:any) => {
    return (
        <div className="flex flex-row items-start gap-10">
            {icon}
            <p className='text-sm font-semibold text-gray-600'>{title}</p>
        </div>
    )
}


function RecendCard() {
  return (
    <div className="w-full mt-[15px] p-2  bg-white rounded-md pl-3">
      <p className="text-sm font-normal text-gray-600">Recent</p>
      <div className="w-[85%] items-center pt-2">
        <RecentItem  icon={<GroupsIcon className='text-gray-600'/>} title={"CS50"}/>
      </div>
    </div>
  )
}

export default RecendCard
