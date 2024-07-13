import google from "../../assets/logos/icons8-google-48.png"
import apple from "../../assets/logos/icons8-apple-48.png"
import { useState } from "react"
import {auth} from "../../api/firebase"
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {useNavigate } from "react-router-dom"

const Slashedbar = () => {
    return (
        <div className="flex flex-row w-full items-center justify-center gap-2">
            <div className="h-[1px] w-[40%] bg-gray-400"></div>
            <p className="text-sm text-gray-400">or</p>
            <div className="h-[1px] w-[40%] bg-gray-400"></div>
        </div>
    )
}

const SocialAuth = ({title,icon,onClick}:any) => {
  return(
    <button onClick={onClick} className="flex flex-row items-center bg-white border-[1px] border-gray-600 rounded-full text-gray-900 justify-center gap-5  " >
      <img src={icon} alt="" className="w-[20px] h-[20px]" />
      <p className="font-bold text-gray-600">{title}</p>
    </button>
  )
}


function LoginMain() {
  const [username,setuserName] = useState("")
  const [password,setpassword] = useState("")
  const provider = new GoogleAuthProvider();

  const navigate  = useNavigate();

  const signIn = async  () => {
    return (
       await signInWithEmailAndPassword(auth,username,password).then(
        (userCredential) => {
          const user = userCredential.user;
          if(!user ||  user == null){
            return ;
          }
          setpassword("");
          setuserName("");
          navigate('/home')
        }
        ).catch((error) => {
          const errorCode = error.code 
          const errorMesg = error.message 
    
          console.log(errorCode,errorMesg)
        })
    )
    }


    const SigninWithGoogle = async () => {
      return (
        await signInWithPopup(auth,provider).then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken ;
          const user = result?.user;

          if(user){
            navigate("/home");
          }
          
          console.log("Auth is Success!",token,user)
        }).catch((error) => {
          const errorCode = error.code ;
          const errorMsg = error.message;
          console.log(errorCode,errorMsg);
        })
      )
    }



  return (
    <div className="w-[28%] p-2 rounded-lg  shadow-xl bg-white mb-5">
      <div className="w-[90%] p-2 item-start flex flex-col pl-5">
        <p className="text-[28px] font-bold text-black ">Sign In</p>
        <p className="text-sm text-gray-600 "> Stay updated on your professional world</p>

        <div className="mt-5 flex flex-col gap-5">
            {/* user-name */}
            <input 
            placeholder="Email or Phone"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            type="text" 
            className="p-3 border-gray-600 w-[100%] bg-white  border-[1px] rounded-md text-gray-900 text-lg pl-4" />
            {/* place Holder */}
            <input 
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            className="p-3 border-gray-600 w-[100%] bg-white  border-[1px] rounded-md text-gray-900 text-lg pl-4" />

            {/* Frogot password */}
            <p className="text-blue-700 font-bold cursor-pointer hover:rounded-2xl hover:pl-2 hover:bg-blue-200 p-1 w-[160px] hover:underline hover:underline-offset-1">Forgot password?</p>

            {/* Sign in Button */}
            <button
            onClick={signIn}
            className="bg-blue-600 rounded-full p-3 text-white font-bold shadow-sm">
                Sign in
            </button>
            <div className="w-full items-center justify-center mt-0">
                <Slashedbar />
            </div>

            {/* Policy Text */}
            
            <p className="text-[12px] text-black w-full pl-2" style={{marginTop:-12}}>By clicking Continue, you agree to LinkedIn’s <span className="text-blue-600 font-bold cursor-pointer"> User Agreement, Privacy Policy </span>, and <span className="text-blue-600 font-bold cursor-pointer">Cookie Policy</span>.</p>

            {/* Social Auth */}
            <SocialAuth title={"Sign in with Google"} icon={google} onClick={SigninWithGoogle} />
            <SocialAuth title={"Sign in with Apple"} icon={apple}  onClick={() => console.log("still not implement the process")}/>
        </div>
      </div>
    </div>
  )
}

export default LoginMain
