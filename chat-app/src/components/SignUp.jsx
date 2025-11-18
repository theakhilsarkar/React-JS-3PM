import { signUp } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function SignUp() {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <h1>Sign Up</h1>
            <div>
                {
                    users.map(user => <h2>{user.email}</h2>)
                }
            </div>
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <hr />
            <button onClick={() => dispatch(signUp({ email, password }))}>Sign Up</button>
        </div>
    )
}
