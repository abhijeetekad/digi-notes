import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth-context";
import { signInHandler } from "../../Services/AuthServices/SignInServices";
function SignIn() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async (userSignned) => {
    const data = await signInHandler(userSignned);
    setAuth((auth) => ({
      ...auth,
      user: data.foundUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    localStorage.setItem("user", data.foundUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);
    navigate("/mainpage");
  };
  return (
    <div className="signUp-container flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(userSignned);
        }}
      >
        <p className="form-name">Sign in</p>
        <div className="sign-mail">
          <p className="required">Email Address</p>
          <input
            type="email"
            placeholder="test@gmail.com"
            onChange={(e) =>
              setUserSignIn({ ...userSignIn, email: e.target.value })
            }
            required
          />
        </div>
        <div className="sign-password">
          <p className="required">Password</p>
          <input
            type="password"
            placeholder="******"
            onChange={(e) =>
              setUserSignIn({ ...userSignIn, password: e.target.value })
            }
            required
          />
        </div>
        <div className="login-flex-row">
          <div className="flex-row-check checkbox">
            <input type="checkbox" required />
            <p className="required">I accept all Terms & Conditions</p>
          </div>
          <Link className="link" to="/forgotpassword">
            <p>Forgot your Password?</p>
          </Link>
        </div>
        <button className="sign-btn">Login</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignIn({
              email: "adarshbalika@gmail.com",
              password: "adarshBalika123",
            });
          }}
          className="sign-btn"
        >
          Login with test id
        </button>
        <div className="flex-row">
          <Link className="link" to="/signup">
            <p>Create New Account</p>
          </Link>
          <i className="fa fa-chevron-right"></i>
        </div>
      </form>
    </div>
  );
}

export { SignIn };
