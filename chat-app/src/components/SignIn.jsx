import React, { useEffect, useState } from 'react';
import { signIn, fetchUsers } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function SignIn() {

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const dispatch = useDispatch();
    // const { users } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <h1>Sign In</h1>

            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => {
                dispatch(signIn({ email, password }));
                navigate("/home");
            }}>Sign In</button>

        </div>
    )
}

// implement google authentiacation in signin component
// add user by setDoc in firebase., accept only unique user.


// when user signin then