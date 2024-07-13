import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"

function MyAvatar({w,h,b=0}:any) {
  const user = useSelector(selectUser)

  return (
    <div>
       <img
      style={{width:w,height:h,borderWidth:b,borderColor:"#FFF"}}
      src={user?.photoUrl} alt="" 
      className={`rounded-full`} />
    </div>
  )
}

export default MyAvatar
