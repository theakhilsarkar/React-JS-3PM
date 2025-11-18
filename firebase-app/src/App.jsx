
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from './firebase';
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc, updateDoc, deleteField } from "firebase/firestore"
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

  const handleSetData = () => {
    setDoc(doc(db, "books", "12345"), {
      "name": "Bhagvad Geeta",
      "author": "Ved Vyasji",
      "price": 799
    }).then(() => alert("data set successfully !!")).catch(err => alert(err.message));
  }

  const handleDeleteData = () => {
    deleteDoc(doc(db, "books", "12345")).then(() => alert("document deleted successfully !!")).catch((er) => alert(er.message))
  }

  const handleDeleteField = async () => {
    const bookRef = doc(db, "books", "kj3YFZcy9rH1TQcnUPwK");
    await updateDoc(bookRef, { "name": "Wings of Fire" })
    alert("field deleted successfully !!");
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
        <button onClick={handleGetData}>Read Data</button>
        <button onClick={handleSetData}>Set Data</button>
        <button onClick={handleDeleteData}>Delete Data</button>
        <button onClick={handleDeleteField}>Delete Field</button>
      </div>
    </>
  )
}

export default App;

// 28.2 --> 3;15


// chat app - multi user chat, crud
// authentication
// firestore
