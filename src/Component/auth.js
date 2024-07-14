import {auth,googleAuthProvider} from '../config/firebase-config';
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {useState} from 'react';

const Auth = () => {
  const [email , setEmail ] = useState('');
  const[password,setPassword] = useState(''); 

  console.log(auth?.currentUser?.email)

  const SignIn = async() => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(err){
      console.error(err);
    }
    
  };

  const signInWithGoogle = async()=>{
    try{
      await signInWithPopup(auth, googleAuthProvider);

    }catch{

    }
  };


  return (
    <div className="auth-class">
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type = "password"  onChange={(e) =>setPassword(e.target.value)}/>
        <button onClick={SignIn}>Sign In</button>

        <button onClick={ signInWithGoogle}>Sign In With Google</button>

    </div>
  )
}

export default Auth;


