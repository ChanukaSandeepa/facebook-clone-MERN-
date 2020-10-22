import { Button } from '@material-ui/core'
import React from 'react'
import '../css/login.css'
import { auth, provider } from '../config/firebase'

export default function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}
