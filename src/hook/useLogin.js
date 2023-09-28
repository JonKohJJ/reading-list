import { useState } from 'react'
import { useAuthContext } from '../hook/useAuthContext'

// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useLogin = () => {

    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()


    const login = (email, password) => {

        setError(null) /* reset the error whenever we sign up a new user */

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // console.log('User logged in: ', res.user)
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .catch((err) => {
                setError(err.message)
            })

    }

    return { error, login }

}