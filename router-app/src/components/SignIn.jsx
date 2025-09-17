import React, { useRef } from 'react'
import { replace, useNavigate } from 'react-router'

export default function SignIn() {

    const navigate = useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const signInUser = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email != "" && password != "") {
            localStorage.setItem("user", JSON.stringify({ "email": email, "password": password }));
            navigate("/home", { replace: true });
        }

    }

    return (
        <div>
            <input type="text" ref={emailRef} />
            <input type="text" ref={passwordRef} />
            <button onClick={signInUser}>Sign In</button>
        </div>
    )
}
