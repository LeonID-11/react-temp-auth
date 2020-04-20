import React from 'react';

export const SignOut= ({signOut, user }) => (
    <div className="jumbotron  mt-4">
        <h1>Hello, {user.displayName}!</h1>
        <button
            className = 'btn btn-primary'
            onClick={signOut}
        >Sign out</button>
    </div>
)