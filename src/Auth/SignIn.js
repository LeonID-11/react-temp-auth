import React from 'react'

export const SignIn = ({signInWithGoogle}) => (
    <div className="jumbotron mt-4">
        <h1>Log in</h1>
        <button
            className = 'btn btn-primary'
            onClick={signInWithGoogle}
        >Sign in</button>
    </div>
)