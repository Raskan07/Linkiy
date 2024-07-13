import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DialpadIcon from '@mui/icons-material/Dialpad';

function BussinesBtn({title}:any) {
    
  return (
    <div className="flex flex-col items-center p-1 pl-2 pr-2 cursor-pointer hover:scale-105">
      <DialpadIcon className='text-gray-600'/>
      <div className="flex flex-row gap-1 items-center">
        <p className="text-gray-600 text-[12px] font-normal">{title}</p>
        <KeyboardArrowDownIcon className='w-[10px] h-[10px] text-gray-600'/>
      </div>
    </div>
  )
}

export default BussinesBtn
