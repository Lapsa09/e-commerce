import React from "react";
import "./custom-button.styles.scss";

function FormButton({ children, ...otherProps }) {
  return (
    <div>
      <button type="submit" className="custom-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
}

export default FormButton;
