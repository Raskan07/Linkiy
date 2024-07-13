import SignUpMain from "../Components/LoginComponents/SignUpMain"
import TopBar from "../Components/LoginComponents/TopBar"

function SignUp() {
  return (
    <div className="w-screen h-screen items-start">
      <TopBar />
      <div className="w-full items-center justify-center flex flex-1 flex-col ">
        <p className="text-[27px] text-black mb-5 w-full text-center ">Make the most of your professional life</p>
        <SignUpMain />
      </div>
    </div>
  )
}

export default SignUp
