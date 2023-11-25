import { useNavigate } from "react-router-dom";
import { api } from "../../API/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser, login } from "../../Store/Slices/userSlice";
import MotionLogo from "../../Components/MotionBackground/MotionLoginBg";
import {
  StyledDiv,
  StyledForm,
  StyledH1,
  StyledInput,
  StyledLeftMainDiv,
  StyledLoginHeader,
  StyledLoginHeaderButton,
  StyledMainDiv,
  StyledP,
  StyledRightMainDiv,
  StyledSignInButton,
  StyledVerificationDiv,
} from "../../Styles/LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState("");
  const [passwordRepeat, setPasswortRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isRegisterClicked, setRegisterClicked] = useState(false);
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [isContinueClicked, setContinueClicked] = useState(false);
  //const [isContinue2Clicked, setContinue2Clicked] = useState(false);
  const [validateError, setValidateError] = useState("");

  //Function for when the user clicks on the login button
  const handleLoginSubmit = async (e) => {
    //Need to prevent default so it does not delete our inputs
    e.preventDefault();

    try {
      //Post call for getting a token
      const res = await api.post("/auth/token/", { email, password });
      //Save the access Token to localStorage
      localStorage.setItem("accessToken", res.data.access);
      //Store the access Token to redux
      dispatch(login(res.data.access));
      //Store the user details to redux
      dispatch(loadUser(res.data.user));
      console.log(res.data.user);
      //Maybe this is the second login-try thats why we set the login error back to an empty string, so the error message will dissapear from ui
      setLoginError("");
      //When the login is successfull directly go to the post route
      navigate("/posts");
    } catch (error) {
      //If there is a specific login error
      if (error.response?.data?.detail) {
        setLoginError(error.response.data.detail);
        //If we dont know exactly why the login did not work
      } else {
        setLoginError("Login Failed");
        console.log(error);
      }
    }
  };

  const handleRegister = () => {
    setLoginError("");
    setRegisterClicked(true);
  };

  const handleContinue = () => {
    setContinueClicked(true);
  };

  const handleSumbit = async (e) => {
    setSubmitClicked(true);
    e.preventDefault();

    if (email.length === 0) {
      setValidateError("Please enter Email");
      setSubmitClicked(false);
    } else {
      try {
        const res = await api.post("/auth/registration/", { email });
        console.log(res.data);
      } catch {
        setSubmitClicked(false);
        setValidateError("Email invalid or already taken");
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.patch("/auth/registration/validation/", {
        email,
        username: userName,
        code,
        password,
        password_repeat: passwordRepeat,
        first_name: firstName,
        last_name: lastName,
      });

      dispatch(loadUser(res.data));

      console.log(res);
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <StyledMainDiv>
        <StyledLeftMainDiv>
          <MotionLogo />
        </StyledLeftMainDiv>

        <StyledRightMainDiv>
          {isContinueClicked ? (
            <StyledVerificationDiv>
              <StyledH1>Verification</StyledH1>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="code"
                  placeholder="Code"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="eMail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <StyledInput
                  type="password"
                  name="password_repeat"
                  placeholder="Password_repeat"
                  required
                  value={passwordRepeat}
                  onChange={(e) => setPasswortRepeat(e.target.value)}
                />
                <StyledInput
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <StyledInput
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </StyledForm>
              <StyledSignInButton onClick={(e) => handleRegisterSubmit(e)}>
                Complete
              </StyledSignInButton>
            </StyledVerificationDiv>
          ) : (
            <>
              {isSubmitClicked ? (
                <StyledDiv>
                  <StyledH1>Congratulations</StyledH1>
                  <StyledP>We`ve sent a confirmation code to you email</StyledP>
                  <StyledSignInButton onClick={handleContinue}>
                    Continue
                  </StyledSignInButton>
                </StyledDiv>
              ) : (
                <>
                  {isRegisterClicked ? (
                    <StyledDiv>
                      <StyledH1>Sign Up</StyledH1>
                      <StyledForm>
                        <StyledInput
                          type="email"
                          name="email"
                          placeholder="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </StyledForm>
                      <StyledSignInButton onClick={handleSumbit}>
                        Continue
                      </StyledSignInButton>
                      <StyledP>{validateError}</StyledP>
                    </StyledDiv>
                  ) : (
                    <>
                      <StyledLoginHeader>
                        <StyledP>Don`t have an Account?</StyledP>
                        <StyledLoginHeaderButton onClick={handleRegister}>
                          Sign Up
                        </StyledLoginHeaderButton>
                      </StyledLoginHeader>
                      <StyledDiv>
                        <StyledH1>Sign in</StyledH1>
                        <StyledForm>
                          <StyledInput
                            type="email"
                            name="email"
                            placeholder="eMail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <StyledInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </StyledForm>
                        <StyledSignInButton
                          onClick={(e) => handleLoginSubmit(e)}
                        >
                          Sign In
                        </StyledSignInButton>
                      </StyledDiv>
                      <StyledP>{loginError}</StyledP>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </StyledRightMainDiv>
      </StyledMainDiv>
    </>
  );
};

export default Login;
