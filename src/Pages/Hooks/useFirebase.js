import React, { useEffect, useState } from 'react';
import initializeAuth from "../Firebase/Firebase.init";
import {getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeAuth()

const useFirebase = () => {
    const [user , setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()

    // register
    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

     // signin
     const signIn =(email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
        })
    }


    // auth change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
          });
          return() => unsubscribe
    } , [])

    // logout 
    const logOut = () => {
        signOut(auth)
        .then(() => {

        })
    }

    return {
        user, 
        signIn,
        register,
        logOut
    }
};

export default useFirebase;