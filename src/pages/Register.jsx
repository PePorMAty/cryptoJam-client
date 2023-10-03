import React from "react";
import Container from "../components/Container";
import s from "../styles/Login.module.css";
import { Form } from "antd";
import CustomInput from "../components/CustomInput";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";
import LoginBg from "../assets/LoginBg.png";
import LoginLogo from "../assets/LoginLogo.png";

const Register = () => {
  return (
    <div className={s.login} style={{ backgroundImage: `url(${LoginBg})` }}>
      <Container>
        <div className={s.registerWrapper}>
          <div className={s.formTitle}>
            <img className={s.formLogo} src={LoginLogo} alt="loginLogo" />
            <h3 className={s.loginTitle}>CryptoJam</h3>
          </div>
          <Form onFinish={() => null}>
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
        </div>
      </Container>
    </div>
  );
};

export default Register;
