import { useEffect } from "react";
import "./App.css";
import Router from "./Routes/Router";
import { api } from "./API/api";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Store/Slices/userSlice";

function App() {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.user.accessToken)

  useEffect(() => {
    //Set the localToken to the accessToken we saved in the localStorage (if there is no token stored in localStorage this will be undefined)
    const localToken = localStorage.getItem("accessToken") 

    //If localToken is not undefined 
    if (localToken) {
      //We verify the given token in the api
      api.post("/auth/token/verify/", {token: localToken})
        //If validation was successfull we dispatch the login action with that token
        .then(() => dispatch(login(localToken)))
        //If the validation went wrong 
        .catch(() => {
          //We remove the accessToken in localStorage since its not valid
          localStorage.removeItem("accessToken")
          //Then we dispatch the logout action to clear the localStorage
          dispatch(logout())
        })
    } else {
      //If there was no value in localToken we can directly dispatch the logout action to make sure that the localStorage is cleared
      dispatch(logout())
    }
  }, [])

  //Set loading screen while its validating the token
  if (accessToken === undefined) {
    return <>loading...</>
  } else {
    return (<Router />)
  }
  
}

export default App;
