import React from "react";
import SignIn from "../../components/signIn/Sign-in";
import SignUp from "../../components/signUp/Sign-up";
import "./signIn.scss";

function signInPage() {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default signInPage;
