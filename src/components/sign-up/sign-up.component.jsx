import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, addUser } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { useState } from "react";

import "./sign-up.styles.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { singUpStart } from "../../redux/user/user.actions";

const SignUp = ({ singUpStart }) => {
  const [information, setInformation] = useState({
    displayName: "",
    email2: "",
    password2: "",
    confirmPassword: "",
  });

  const { displayName, email2, password2, confirmPassword } = information;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(information);

    if (password2 !== confirmPassword) {
      alert("passwords need to be the same");
      return;
    }

    singUpStart(information);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInformation({ ...information, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email2"
          value={email2}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password2"
          value={password2}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  singUpStart: (information) => dispatch(singUpStart(information)),
});

export default connect(null, mapDispatchToProps)(SignUp);
