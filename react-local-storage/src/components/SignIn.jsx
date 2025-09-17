import React, { useRef } from 'react'

export default function SignIn() {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSignIn = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        localStorage.setItem("user", JSON.stringify({
            "email": email,
            "password": password
        }))
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <input type="text" ref={emailRef} />
            <input type="text" ref={passwordRef} />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
}
