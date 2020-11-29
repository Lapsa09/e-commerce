import React, { useState } from "react";
import FormInput from "../form-input/formInput";
import CustomButton from "../formButton/customButton";
import "./Sign-in.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleEmailChange}
          label="Email"
          type="email"
          value={email}
          name="email"
          required
        />
        <FormInput
          handleChange={handlePasswordChange}
          label="Password"
          type="password"
          value={password}
          name="password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
