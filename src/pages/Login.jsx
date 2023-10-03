import React, { useState } from "react";
import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/services/auth";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";
import CustomInput from "../components/CustomInput";
import PasswordInput from "../components/PasswordInput";
import Container from "../components/Container";
import LoginBg from "../assets/LoginBg.png";
import LoginLogo from "../assets/LoginLogo.png";
import s from "../styles/Login.module.css";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const login = async (data) => {
    try {
      await loginUser(data).unwrap();

      navigate("/");
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
        <div className={s.loginWrapper}>
          <div className={s.formTitle}>
            <img className={s.formLogo} src={LoginLogo} alt="loginLogo" />
            <h3 className={s.loginTitle}>CryptoJam</h3>
          </div>

          <Form onFinish={login}>
            <label
              htmlFor="input"
              className={s.labelInput}
              style={{ fontSize: "18px" }}
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
              style={{ fontSize: "18px" }}
            >
              Password
            </label>
            <PasswordInput
              type="password"
              name="password"
              placeholder={"Enter your password"}
              className={s.loginInput}
            />
            <div className={s.loginBottomWrapper}>
              <Link to={"/register"} className={s.loginLink}>
                Don’t have an account?
              </Link>
              <button className={s.btn} type="submit">
                Sign in
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

export default Login;
