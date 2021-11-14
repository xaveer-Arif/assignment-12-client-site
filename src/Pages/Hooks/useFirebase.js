import React, { useEffect, useState } from 'react';
import initializeAuth from "../Firebase/Firebase.init";
import {getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

initializeAuth()

const useFirebase = () => {
    const [user , setUser] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()

    // register
    const register = (email, name,  password, history, location) => {
        setIsLoading(true)
        console.log(isLoading)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            
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
            history.replace('/')
        })
        .finally(error => {
            setIsLoading(false)
            console.log(isLoading)
            setError(error.message)
        })
    }

     // signin
     const signIn =(email, password, history , location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const distination = location?.state?.from || '/';
            history.replace(distination)
            // const user = result.user
            // setUser(user)
        })
        .finally(() =>setIsLoading(false))
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
        });
        return() => unsubscribe
    } , [])

     // admin
     useEffect(() => {
        if(user.email){
       fetch(`https://guarded-retreat-48750.herokuapp.com/userAdmin/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
        }
        
    },[user.email])

    // logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {

        })
        .finally(() => {
            console.log(isLoading)
            setIsLoading(false)})
    }
   
    
    

    // console.log(user.email)
    // save user data in database
    const saveUser = (email, displayName) => {
        setIsLoading(true)
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
    
        .finally(() => {
            console.log(isLoading)
            setIsLoading(false)})
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