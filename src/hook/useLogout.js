import { useState } from 'react'
import { useAuthContext } from "./useAuthContext"

// firebase imports
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export const useLogout = () => {

    const  { dispatch } = useAuthContext()

    const logout = () => {
        signOut(auth)
            .then(() => {
                // console.log('User signed out:')
                dispatch({ type: 'LOGOUT' })
            }) 
            .catch((err) => {
                console.log(err.message)
            })
    }

    return { logout }

}