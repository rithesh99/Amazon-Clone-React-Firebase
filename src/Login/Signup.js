import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import firebase from "firebase";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");


  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
            console.log(auth.user.uid);
            console.log("User created successfully!!!");
    
            firebase
            .database()
            .ref('/users/' + auth.user.uid)
            .set({
                name, 
                email,
                number,
                id: auth.user.uid
            })
            .then(() => console.log("data set success"))
        
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Create Account</h1>

        <form>
        <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Mobile number</h5>
           <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={register}
            className="login__signInButton"
          >
            Register
          </button>
        </form>

        <p style={{"text-align":"center"}}>
        Already have an account? <Link to="/login">Sign in</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
