
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((() => alert("signup successfully !!")))
      .catch((error) => alert(error.message));
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signin successfully !! " + user.email);
      })
      .catch((error) => alert(error.message));
  }

  return (
    <>
      <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}

export default App
