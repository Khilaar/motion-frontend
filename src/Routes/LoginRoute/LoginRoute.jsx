import { useNavigate } from "react-router-dom";
import { api } from "../../API/api";
import CounterTest from "../../Components/CounterTest/CounterTest";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser, login } from "../../Store/Slices/userSlice";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //Function for when the user clicks on the login button
    const handleLoginSubmit = async (e) => {
        //Need to prevent default so it does not delete our inputs
        e.preventDefault()

        try {
            //Post call for getting a token
            const res = await api.post("/auth/token/", {email, password})
            //Save the access Token to localStorage
            localStorage.setItem("accessToken", res.data.access)
            //Store the access Token to redux
            dispatch(login(res.data.access))
            //Store the user details to redux
            dispatch(loadUser(res.data.user))
            //Maybe this is the second login-try thats why we set the login error back to an empty string, so the error message will dissapear from ui
            setLoginError("")
            //When the login is successfull directly go to the post route
            navigate("/posts")

        } catch (error) {
            //If there is a specific login error
            if (error.response?.data?.detail) {
                setLoginError(error.response.data.detail)
            //If we dont know exactly why the login did not work
            } else {
                setLoginError("Login Failed")
                console.log(error)
            }
        }
    }


    return (
        <div>
            <h1>Login Page</h1>
            <CounterTest/>
            <form onSubmit={(e) => handleLoginSubmit(e)}>

                <input name="email" 
                type="email" 
                placeholder="Email"
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <input name="password" 
                type="password" 
                placeholder="Password"
                required  
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Log in</button>
                {/*Display the login error when login failed*/}
                <p>{loginError}</p>
            </form>
        </div>
    );
};

export default Login;