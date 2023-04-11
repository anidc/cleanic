import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword, updateProfile } from "firebase/auth"
import React, { useContext, useEffect, useState } from "react"
import { auth, db } from "../firebase"
import { doc, setDoc } from "firebase/firestore"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(name, surname, price, location, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const userData = { name, surname, price, location }

                const userDoc = doc(db, "Users", user.uid)

                setDoc(userDoc, userData)



                return updateProfile(user, {
                    displayName: `${name} ˘${surname}`
                }).then(() => {
                    return {
                        ...user,
                        displayName: `${name} ${surname}`
                    }
                })
            })
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function updateUser(userData, password, email) {
        const userDoc = doc(db, "Users", auth.currentUser?.uid)
        setDoc(userDoc, userData)

        const user = auth.currentUser

        if (email && email !== user.email) {
            updateEmail(user, email)
                .catch(err => console.log(err.message))
        }

        if (password) {
            updatePassword(user, password)
                .catch(err => console.log(err.message))
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}