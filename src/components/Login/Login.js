import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={"login__signInButton"} onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you are to agree to Amazon's conditions of stealing your
          data. See privacy notes for more details on stealing. Do see our
          cookie policy and notice
        </p>
        <button className={"login__registerButton"} onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
