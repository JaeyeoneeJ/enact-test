import React from "react";
import Button from "@enact/sandstone/Button";

const TButton = ({ children, ...rest }) => {
  console.log("jjy TButton");
  return <Button {...rest}>{children}</Button>;
};

export default TButton;
