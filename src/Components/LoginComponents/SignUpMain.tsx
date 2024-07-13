import google from "../../assets/logos/icons8-google-48.png"
import {auth} from "../../api/firebase"
import { useState } from "react"
import {createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { Link,useNavigate } from "react-router-dom"

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


function SignUpMain() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();


  const createUser = () => {
        return (
        createUserWithEmailAndPassword(auth,username,password).then(
        (userCredential) => {
          const user =  userCredential.user ;
          console.log("signup",user)
          setUsername("");
          setPassword("");
          navigate("/home")
        }
      ).catch((error) => {
        const errorCode = error.code ;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      })
      
      )}
  

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email or Phone"
            type="text" 
            className="p-1 border-gray-600 w-[100%] bg-white  border-[1px] rounded-md text-gray-900 text-lg pl-4" />
            {/* place Holder */}
            <input 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            className="p-1 border-gray-600 w-[100%] bg-white  border-[1px] rounded-md text-gray-900 text-lg pl-4" />

            {/* Sign in Button */}
            <button 
            onClick={createUser}
            className="bg-blue-600 rounded-full p-2 text-white font-bold shadow-sm">
                Sign in
            </button>
            <div className="w-full items-center justify-center mt-0">
                <Slashedbar />
            </div>

            {/* Policy Text */}
            
            <p className="text-[12px] text-black w-full pl-2" style={{marginTop:-12}}>By clicking Continue, you agree to LinkedIn’s <span className="text-blue-600 font-bold cursor-pointer"> User Agreement, Privacy Policy </span>, and <span className="text-blue-600 font-bold cursor-pointer">Cookie Policy</span>.</p>

            {/* Social Auth */}
            <SocialAuth title={"Sign in with Google"} icon={google} onClick={SigninWithGoogle} />

            <p className="text-[13px] text-black w-full pl-2 mt-[20px]  text-center" style={{marginTop:-12}}>Already on LinkedIn?<span className="text-blue-600 font-bold cursor-pointer"> <Link to={"/login"}> Login </Link> </span></p>

        </div>
      </div>
    </div>
  )
}

export default SignUpMain
