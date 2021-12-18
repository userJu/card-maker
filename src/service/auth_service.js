import firebase from "firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseApp from "../../service/fireBase";

class AuthService {
  login(providerName) {
    const authProvider = new [`${providerName}AuthProvider`]();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AuthService;
