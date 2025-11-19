import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, getUser } from '../slices/userSlice';
import { useNavigate } from 'react-router'

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { users, currentUser } = useSelector(state => state.user);
    useEffect(() => {
        dispatch(getUser());
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2>User - {currentUser.email}</h2>
            <div className='w-100 bg-black'>

                <ol className="list-group list-group-numbered">
                    {
                        users.map((user, i) => {
                            if (user.email != currentUser.email) {
                                return <li onClick={() => navigate("/chat", { state: user })} key={i} className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{user.email}</div>
                                        Content for list item
                                    </div>
                                    <span className="badge text-bg-primary rounded-pill">14</span>
                                </li>
                            }
                            // return <></>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}
