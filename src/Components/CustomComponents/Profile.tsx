

function Profile({w,h,b=0,url}:any) {

  return (
    <div>
       <img
      style={{width:w,height:h,borderWidth:b,borderColor:"#FFF"}}
      src={url} alt="" 
      className={`rounded-full`} />
    </div>
  )
}

export default Profile
