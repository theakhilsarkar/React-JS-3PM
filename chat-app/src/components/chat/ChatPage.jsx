import React, { useEffect } from 'react'
import "./chat-style.css";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { sendMessage } from '../../slices/chatSlice'
import { getUser } from '../../slices/userSlice'

export default function ChatPage() {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
    const location = useLocation();
    const receiver = location.state;

    useEffect(() => {
        dispatch(getUser());
    }, [])

    const handleSendMessage = () => {
        dispatch(sendMessage({ sender: currentUser.email, receiver: receiver.email }))
    }

    return (
        <div className='main'>
            <div className='chat-box'>
                <div className='chat-view'>
                    <h3>{receiver.email}</h3>
                </div>
                <div className='input-div'>
                    <input className='input' type="text" />
                    <button onClick={handleSendMessage} className='button'>Send</button>
                </div>
            </div>
        </div>

    );
}
