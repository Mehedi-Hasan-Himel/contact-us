import React from "react";
import Styles from "./Button.module.css";
const Button = ({ isOutLine, icon, text, ...rest }) => {
  return (
    <button {...rest} className={isOutLine ? Styles.outline_btn : Styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
