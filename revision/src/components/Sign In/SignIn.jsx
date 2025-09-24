import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={() => {
                navigate("/home", { replace: true });
                // replace:true --> previous page history clear
                // one page to another page navigate -->
                // previous page, not show on back
                // ex. login --> home
                // ex.payment screen --> home
            }}>Next</button>
        </div>
    )
}
