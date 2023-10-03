import { Form, Input } from "antd";
import React from "react";

const CustomInput = ({ name, placeholder, type = "text" }) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{ required: true, message: "Required field" }]}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
