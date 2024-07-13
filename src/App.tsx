
import Login from "./routes/Login"
import Home from "./routes/Home"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./api/firebase"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, selectUser } from "./features/userSlice"

function App() {

  const dispatch = useDispatch();

    const authState =  async () => {
      onAuthStateChanged(auth,(user) => {
      if(user){
        dispatch(login({
          uid:user?.uid,
          name:user?.displayName,
          email:user?.email,
          photoUrl:user?.photoURL,
        }))
      }
    })}

    useEffect(() => {
      authState();
    },[auth])

    const user =  useSelector(selectUser);
  return (
    user ? <Home /> : <Login />
  )
}

export default App
