
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from './firebase';
import { addDoc, collection, getDocs } from "firebase/firestore"
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

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.photoURL);
        alert("google signin successfully !")
      })
      .catch((error) => alert(error.message));
  }

  const handleAddData = () => {
    addDoc(collection(db, "books"), {
      "name": "Power of Now",
      "author": "Eckart Tale",
      "price": 200.90
    }).then(() => alert("data added successfully !!")).catch(err => alert(err.message));
  }

  const handleGetData = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.docs.forEach((doc) => console.log(doc.data()));
  }

  return (
    <>
      <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
      <div>
        <button onClick={handleAddData}>Add Data</button>
        <button onClick={handleGetData}>React Data</button>
      </div>
    </>
  )
}

export default App
