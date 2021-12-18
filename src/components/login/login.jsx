import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseApp from "../../service/fireBase";
const Login = (props) => {
  const onClick = (e) => {
    if (e.target.innerHTML === "Google") {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (e.target.innerHTML === "Github") {
      const provider = new GithubAuthProvider();

      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GithubAuthProvider.credentialFromError(error);
        });
    }
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={onClick}>Google</button>
      <button onClick={onClick}>Github</button>
    </>
  );
};

export default Login;
