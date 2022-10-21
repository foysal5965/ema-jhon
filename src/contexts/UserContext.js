import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { useState } from 'react';
export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading , setLoading]= useState(true)
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
        
    }
    const logOut =()=>{
        return signOut(auth)
        setLoading(true)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unSubscribe()
    },[])
    const authInfo = {user,loading, createUser, signIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;