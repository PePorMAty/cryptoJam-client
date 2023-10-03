import { Alert } from "antd";
import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return <Alert message={message} type="error"></Alert>;
};

export default ErrorMessage;
