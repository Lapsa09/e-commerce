import React from "react";
import "./customButton-styles.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
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

export default CustomButton;
