import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confg";

const initializeAuth = () =>  {
    initializeApp(firebaseConfig)
}
export default initializeAuth;