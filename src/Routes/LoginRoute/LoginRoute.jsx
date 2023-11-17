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

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("/auth/token/", {email, password})
            localStorage.setItem("accessToken", res.data.access)
            dispatch(login(res.data.access))
            dispatch(loadUser(res.data.user))
            setLoginError("")
            navigate("/posts")

        } catch (error) {

            if (error.response?.data?.detail) {
                setLoginError(error.response.data.detail)

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
                <p>{loginError}</p>
            </form>
        </div>
    );
};

export default Login;