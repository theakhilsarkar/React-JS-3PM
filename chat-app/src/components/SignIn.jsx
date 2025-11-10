import React, { useState } from 'react';
import { signIn } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SignIn() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <div>
                {
                    users.map((user) => <h2>{user.email}</h2>)
                }
            </div>
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => dispatch(signIn({ email, password }))}>Sign In</button>
        </div>
    )
}
