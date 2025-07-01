import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signupError, setSignUpError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkSignup = () => {
    const { username, email, password } = formData;
    setSignUpError(null);

    if (username.trim() === "") {
      setSignUpError("Username invalid (not present)");
      return false;
    }
    if (email.trim() === "" || !email.includes("@")) {
      setSignUpError("E-mail invalid (not present / not an actual E-mail)");
      return false;
    }
    if (password.trim() === "" || password.length < 6) {
      setSignUpError("Password invalid (less than 6 characters long / not present)");
      return false;
    }

    setSignUpError("OK");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkSignup()) {
      navigate("/home");
    }
  };

  return (
    <div className="signup-page-main">
      <img 
        src={`${process.env.PUBLIC_URL}/img/ForecastLogoBig.png`} 
        alt="LOGO" 
        className="signup-img" 
      />
      <div className="signup-main">
        <h2 className="signup-title">Sign Up</h2>
        <form action="" onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Your Username"
            className="signup-inp"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your E-mail"
            className="signup-inp"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Your Password"
            className="signup-inp"
            onChange={handleChange}
          />
          <button className="signup-btn fc-btn">Sign up</button>
          {signupError && <p className="signup-err">*{signupError}</p>}
        </form>
      </div>
    </div>
  );
};
