import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import Login from "../components/login/login";
import { firebaseApp } from "./fireBase";

class AuthService {
  // login(providerName) {
  //   const auth = getAuth();
  //   if (providerName === "Google") {
  //     const provider = new GoogleAuthProvider();
  //     console.log("awdf");
  //     signInWithPopup(auth, provider);
  //   } else if (providerName === "Github") {
  //     const provider = new GithubAuthProvider();
  //     signInWithPopup(auth, provider);
  //   }
  // }
  // onAuthChange(onUserChanged) {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     onUserChanged(user);
  //   });
  // }

  authLogin(providerName) {
    // const auth = getAuth();
    // if (providerName === "Google") {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider);
    // } else if (providerName === "Github") {
    //   const provider = new GithubAuthProvider();
    //   signInWithPopup(auth, provider);
    // }
    console.log("웨안뒈");
  }
}

export default AuthService;
