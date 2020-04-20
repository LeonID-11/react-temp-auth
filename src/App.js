import React, {Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth/dist';
import { SignIn } from './Auth/SignIn';
import { SignOut } from './Auth/SignOut';
import TempList from './components/TempList'
import {Loader} from './components/Loader'
 
const firebaseConfig = {
    apiKey: "AIzaSyBVjbP0Zlt6RqvsEbYYEjwWxKd1yMoz_tw",
    authDomain: "react-temp-auth.firebaseapp.com",
    databaseURL: "https://react-temp-auth.firebaseio.com/"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
 
const firebaseAppAuth = firebaseApp.auth();
 
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
const App = ({
  signInWithGoogle,
  signOut,
  user,
  loading,
}) => {

  let load = false;
  if(!!user){
    load = true
  }

  return (
    <div className='container'>
      {
        user === null
          ?
            <SignIn signInWithGoogle={signInWithGoogle} />
          : 
            load 
          ?
            <Fragment>
              <SignOut
                signOut = {signOut}
                user = {user}
              />
              <TempList user = {user}/>
            </Fragment>
          : 
            <Loader/>
      }
      
      {
        loading && <p>Loading..</p>
      }
    </div>
  )
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
