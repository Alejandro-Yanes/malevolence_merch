import React, { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import "./sign-in.styles.scss";
import { useNavigate } from "react-router-dom";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";
import { connect } from "react-redux";

const SignIn = ({ currentUser, googleSignInStart, emailSignInStart }) => {
  let [info, setInfo] = useState({ email: "", password: "" });

  const { email, password } = info;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label={"Email"}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label={"Password"}
          required
        />
        <div className="buttons-flex">
          <CustomButton>Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
