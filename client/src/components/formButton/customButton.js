import React from "react";
import { CustomButtonContainer } from "./customButton-styles";

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
