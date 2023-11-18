import { useNavigate } from "react-router-dom";
import { api } from "../../API/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser, login } from "../../Store/Slices/userSlice";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [code, setCode] = useState("")
    const [passwordRepeat, setPasswortRepeat] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [loginError, setLoginError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isRegisterClicked, setRegisterClicked] = useState(false);
    const [isSubmitClicked, setSubmitClicked] = useState(false);
    const [validateError, setValidateError] = useState("");

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

    const handleRegister = () => {
        setLoginError("");
        setRegisterClicked(true);
      }

    const handleSumbit = async (e) => {
        console.log(email);
          setSubmitClicked(true);
          e.preventDefault();
  
          if (email.length === 0) {
            setValidateError("Please enter Email")
            setSubmitClicked(false);
          }
          else {
          try {
  
              const res = await api.post("/auth/registration/", {email});
              console.log(res.data);
          }
          catch {
             setSubmitClicked(false)
              setValidateError("Email invalid or already taken");
          }
          }
      }

      const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.patch("/auth/registration/validation/" , 
            {email, username: userName, code, password, password_repeat: passwordRepeat,
            first_name: firstName, last_name: lastName});

            dispatch(loadUser(res.data));

            console.log(res);
        }
        catch {
            console.log('error');
        }
    }


      return (
        <div>
          {isSubmitClicked ? (
            <form onSubmit={(e) => handleRegisterSubmit(e)}>
                <input
                    type="email"
                    name="email"
                    placeholder="eMail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input 
                    type="text"
                    name="code"
                    placeholder="Code"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input 
                    type="password"
                    name="password_repeat"
                    placeholder="Password_repeat"
                    required
                    value={passwordRepeat}
                    onChange={(e) => setPasswortRepeat(e.target.value)}
                  />
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <button type="submit">Submit</button>
            </form>
          ) : (
            <form>
              {isRegisterClicked ? (
                <>
                  <input
                    type="email"
                    name="email"
                    placeholder="eMail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleSumbit}>Submit</button>
                  <p>{validateError}</p>
                </>
              ) : (
                <>
                <h1>Login Page</h1>
                  <input
                    type="email"
                    name="email"
                    placeholder="eMail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={(e) => handleLoginSubmit(e)}>Login</button>
                  <button onClick={handleRegister}>Register</button>
                </>
              )}
            </form>
          )}
          <p className="error">{loginError}</p>
        </div>
      );
}

export default Login;