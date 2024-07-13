import { Link } from "react-router-dom"
import LoginMain from "../Components/LoginComponents/LoginMain"
import TopBar from "../Components/LoginComponents/TopBar"

function Login() {
  return (
    <div className="w-screen h-screen items-start">
      <TopBar />
      <div className="w-full items-center justify-center flex flex-1 flex-col gap-5 ">
        <LoginMain />
        <p className="text-[16px] font-normal text-black w-full pl-2 mt-[25px] mb-10  text-center" style={{marginTop:-12}}>New to LinkedIn? <span className="text-blue-700 font-bold cursor-pointer"> <Link className="text-blue-600 font-bold" to={"/signup"}> Join now </Link> </span></p>
      </div>
    </div>
  )
}

export default Login
