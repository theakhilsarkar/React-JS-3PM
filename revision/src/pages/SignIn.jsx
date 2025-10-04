import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

    const navigate = useNavigate();

    const emailRef = useRef("");
    const passwordRef = useRef("");
    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" ref={emailRef} />
            <input type="text" ref={passwordRef} />
            <button onClick={() => {
                // local storage
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                const user = {
                    email: email,
                    password: password
                };
                localStorage.setItem("user", JSON.stringify(user));
                const auth = JSON.parse(localStorage.getItem("user") || "{}");
                if (auth.email) {
                    navigate("/home", { replace: true });
                }
                else {
                    alert("first sign in to enter home page !!");
                }

            }}>Sign In</button>
        </div>
    )
}
