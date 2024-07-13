import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import Login from './routes/Login.tsx'
import Home from './routes/Home.tsx'
import SignUp from './routes/SingUp.tsx'
import { Provider } from 'react-redux'
import {store} from "./store/store.tsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/home",
    element:<Home />
  },
  {
    path:"/signup",
    element:<SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router}/>
    </Provider>
  </React.StrictMode>,
)
