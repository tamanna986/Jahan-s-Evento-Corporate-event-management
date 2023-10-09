
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

   // create user
    const createUser = (email, password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
// login user
const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}
// sign in with google
const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
// observe user
useEffect(() =>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false);
        console.log('setted new user is ' , currentUser)
       })
       return () =>{
        unSubscribe();
       }
} ,[])

    // log out
    const logOut = () =>{
        return signOut(auth)
      }
    const authInfo ={
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value ={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}