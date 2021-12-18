import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { firebaseApp } from "./fireBase";

class AuthService {
  login(providerName) {
    const auth = getAuth();

    if (providerName === "Google") {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } else if (providerName === "Github") {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider);
    }
  }
}

export default AuthService;
