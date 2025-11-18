import React, { useEffect, useState } from 'react'
import "./chat-style.css";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { sendMessage, readMessages } from '../../slices/chatSlice'
import { getUser, getCurrentUser } from '../../slices/userSlice'

export default function ChatPage() {

    const dispatch = useDispatch();
    const location = useLocation();
    const { currentUser } = useSelector(state => state.user);
    const [message, setMessage] = useState("");


    const receiver = location.state;

    useEffect(() => {
        dispatch(getUser());
        dispatch(getCurrentUser());
        dispatch(readMessages({ sender: currentUser.email, receiver: receiver.email }));
    }, [])

    const handleSendMessage = () => {
        dispatch(sendMessage({ message: message, sender: currentUser.email, receiver: receiver.email }))
    }

    return (
        <div className='main'>
            <div className='chat-box'>
                <div className='chat-view'>
                    <h3>{receiver.email}</h3>
                    <div>
                        {/* {
                            chatList.map((chat, i) => <p key={i}>{chat.message}</p>)
                        } */}
                    </div>
                </div>
                <div className='input-div'>
                    <input onChange={(e) => setMessage(e.target.value)} className='input' type="text" />
                    <button onClick={handleSendMessage} className='button'>Send</button>
                </div>
            </div>
        </div>

    );
}
