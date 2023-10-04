import React, { useState } from "react";
import Container from "../components/Container";
import s from "../styles/Login.module.css";
import { Form } from "antd";
import CustomInput from "../components/CustomInput";
import PasswordInput from "../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import LoginBg from "../assets/LoginBg.png";
import LoginLogo from "../assets/LoginLogo.png";
import ErrorMessage from "../components/ErrorMessage";
import { useRegisterMutation } from "../store/services/auth";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [registerUser] = useRegisterMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const register = async (data) => {
    try {
      await registerUser(data).unwrap();

      navigate("/login");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  return (
    <div className={s.login} style={{ backgroundImage: `url(${LoginBg})` }}>
      <Container>
        <div className={s.registerWrapper}>
          <div className={s.formTitle}>
            <img className={s.formLogo} src={LoginLogo} alt="loginLogo" />
            <h3 className={s.loginTitle}>CryptoJam</h3>
          </div>
          <Form onFinish={register}>
            <label
              htmlFor="input"
              className={s.labelInput}
              style={{ fontSize: "16px" }}
            >
              Name
            </label>
            <CustomInput
              type="name"
              name="name"
              placeholder={"Enter your name"}
              className={s.loginInput}
            />
            <label
              htmlFor="input"
              className={s.labelInput}
              style={{ fontSize: "16px" }}
            >
              Email
            </label>
            <CustomInput
              type="email"
              name="email"
              placeholder={"Enter your email"}
              className={s.loginInput}
            />
            <label
              htmlFor="input"
              className={s.labelInput}
              style={{ fontSize: "16px" }}
            >
              Password
            </label>
            <PasswordInput
              type="password"
              name="password"
              placeholder={"Enter your password"}
              className={s.loginInput}
            />
            <label
              htmlFor="input"
              className={s.labelInput}
              style={{ fontSize: "16px" }}
            >
              Confirm Password
            </label>
            <PasswordInput
              type="password"
              name="confirmPassword"
              placeholder={"Confirm your Password"}
              className={s.loginInput}
            />
            <div className={s.loginBottomWrapper}>
              <Link to={"/login"} className={s.loginLink}>
                Do you have an account?
              </Link>
              <button className={s.btn} type="submit">
                Sign up
              </button>
            </div>
          </Form>
          <div className={s.error}>
            <ErrorMessage message={error} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
