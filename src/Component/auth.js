import {auth,googleAuthProvider} from '../config/firebase-config';
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {useEffect, useState} from 'react';
import './css/auth.css';

const Auth = () => {
  // const [email , setEmail ] = useState('');
  // const[password,setPassword] = useState(''); 
  const[userName,setUserName] = useState('');

  // console.log(auth?.currentUser?.email)

  // const SignIn = async() => {
  //   try{
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   }
  //   catch(err){
  //     console.error(err);
  //   }
    
  // };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
      }
    });
    return unsubscribe;
  } ,[]);

  const signInWithGoogle = async()=>{
    try{
      await signInWithPopup(auth, googleAuthProvider);

    }catch{

    }
  };

  const handleSignOut = async()=>{
    try{
      await auth.signOut();
    }catch{
      console.error('Sign out failed');
    }
  };

  
  return (
      <>  
        {/* <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type = "password"  onChange={(e) =>setPassword(e.target.value)} autoComplete=''/>
          <button onClick={SignIn}>Sign In</button> */}
  
        {userName ? (
          <div className='welcome-class'>Welcome, {userName}!
          <button className='auth-logout' onClick={handleSignOut}>
              Logout
          </button>
          </div>
  
        ) : (
          <button className='auth-button' onClick={signInWithGoogle}>
            <img className='google-image' src="/assets/images/google-logo.webp" alt="Google logo" />
            SIGN IN WITH GOOGLE
          </button>
        )}
      </>
    
  )
}

export default Auth;


