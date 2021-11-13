import React, { useEffect, useState } from 'react';
import initializeAuth from "../Firebase/Firebase.init";
import {getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

initializeAuth()

const useFirebase = () => {
    const [user , setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()

    // register
    const register = (email, name,  password, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const distination = location?.state?.from || '/';
            /* const user = result.user;
            user.name = {name} */
            const newUser = {email, displayName: name}
            setUser(newUser)
            saveUser(email, name)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
            // setUser(user)
            history.replace(distination)
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

     // signin
     const signIn =(email, password, history , location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const distination = location?.state?.from || '/';
            history.replace(distination)
            const user = result.user
            setUser(user)
        })
        .finally(() => setIsLoading(false))
    }


    // auth change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
            return() => unsubscribe
          });
    } , [])

    // logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {

        })
        .finally(() => setIsLoading(false))
    }
    // admin
    useEffect(() => {
        fetch(`https://guarded-retreat-48750.herokuapp.com/userAdmin/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[user.email])
    // save user data in database
    const saveUser = (email, displayName) => {
        const user = {email, displayName}
        console.log(user)
        fetch('https://guarded-retreat-48750.herokuapp.com/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
// console.log(user)
    return {
        user, 
        admin,
        isLoading,
        signIn,
        register,
        logOut
    }
};

export default useFirebase;