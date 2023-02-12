import AppButton from "components/AppButton/AppButton";
import AppIcon from "components/AppIcon/AppIcon";
import React from "react";
import styles from "./errormessage.module.scss";

const ErrorMessage = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <AppIcon icon="alert-circle" size={70} />
      <h2>Ohhh no...</h2>
      <p>Something went wrong while getting the articles</p>
      <AppButton
        label="Refresh page"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default ErrorMessage;
