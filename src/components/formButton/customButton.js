import React from "react";
import "./custom-button.styles.scss";

function FormButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      type="submit"
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default FormButton;
