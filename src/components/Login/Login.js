import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { CreactUserContext } from "../../App";
import firebaseConfig from "../../firebse";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import loginSvg from "../../asset/undraw_authentication_fsn5.svg";
import Navbar from "../home/Navbar/Navbar";
import Footer from "../Footer/Footer";
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(CreactUserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="container-fluid px-0">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-1 py-5 mt-5">
              <h1 className="display-4 py-3">Log In</h1>
              <div className="login">
                <form action="">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Eamil"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </form>
                <button onClick={handleGoogleSignIn} className="login-btn rounded">
                  <i className="fab fa-google pr-3"></i> Continue With Google
                </button>
              </div>
            </div>
            <div className="col-md-6 py-5">
              <img className="img-fluid" src={loginSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
