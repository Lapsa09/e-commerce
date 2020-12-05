import React from "react";
import "./custom-button.styles.scss";

function FormButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      type="submit"
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default FormButton;
