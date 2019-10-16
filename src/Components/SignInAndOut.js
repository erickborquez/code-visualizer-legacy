import React from 'react'
import { signInWithGoogle, signOut } from '../firebase'
const SignInAndOut = () => {
    return (
        <div>
            <button onClick={() => signInWithGoogle()} >Sign In!!!</button>
            <button onClick={() => signOut()}>Sign Out!!!</button>
        </div>
    )
}

export default SignInAndOut; 