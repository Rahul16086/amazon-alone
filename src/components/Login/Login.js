import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={"login"}>
      <Link to={"/"}>
        <img
          className={"login__logo"}
          src={"https://pngimg.com/uploads/amazon/amazon_PNG24.png"}
          alt={""}
        />
      </Link>

      <div className={"login__container"}>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type={"text"} />
          <h5>Password</h5>
          <input type={"password"} />
          <button className={"login__signInButton"}>Sign In</button>
        </form>
        <p>
          By signing-in you are to agree to Amazon's conditions of stealing your
          data. See privacy notes for more details on stealing. Do see our
          cookie policy and notice
        </p>
        <button className={"login__registerButton"}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
