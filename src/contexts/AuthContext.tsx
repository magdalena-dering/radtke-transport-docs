import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import firebase from 'firebase'

export const AuthContext = React.createContext<firebase.User | null>(null)
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <>
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}
