import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth-context";
import { signUpHandler } from "../../Services/AuthServices/SignUpServices";
import "./SignUp.css";
function SignUp() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSignup = async (userSignup) => {
    const data = await signUpHandler(userSignup);
    setAuth((auth) => ({
      ...auth,
      user: data.createdUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    localStorage.setItem("user", data.createdUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);
    navigate("/mainpage");
  };
  const signUpsubmitHandler = (e) => {
    e.preventDefault();
    handleSignup(userSignup);
  };

  return (
    <div className="signUp-container flex-col">
      <form onSubmit={signUpsubmitHandler}>
        <p className="form-name">Sign Up</p>
        <div className="sign-name">
          <div>
            <p className="required">First Name</p>
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) =>
                setUserSignup((user) => ({
                  ...user,
                  firstName: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <p className="required">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) =>
                setUserSignup((user) => ({ ...user, lastName: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="sign-mail">
          <p className="required">Email Address</p>
          <input
            type="email"
            placeholder="test@gmail.com"
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, email: e.target.value }))
            }
          />
        </div>
        <div className="sign-password">
          <p className="required">Password</p>
          <input
            type="password"
            placeholder="******"
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, password: e.target.value }))
            }
          />
        </div>
        <div className="flex-row-check checkbox">
          <input type="checkbox" required />
          <p className="required">I accept all Terms & Conditions</p>
        </div>
        <button type="submit" className="sign-btn">
          Create New Account
        </button>
        <div className="flex-row">
          <Link className="link" to="/signin">
            <p>Already have an account</p>
          </Link>
          <i className="fa fa-chevron-right"></i>
        </div>
      </form>
    </div>
  );
}

export { SignUp };
