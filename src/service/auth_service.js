import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
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

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("로그아웃");
      // Sign-out successful.
    });
  }

  onAuthChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
