import React from 'react'
import "./chat-style.css";
import { useLocation } from 'react-router'

export default function ChatPage() {

    const location = useLocation();
    const receiver = location.state;
    return (

        <div className='main'>
            <div className='chat-box'>
                <div className='chat-view'>
                    <h3>{receiver.email}</h3>
                </div>
                <div className='input-div'>
                    <input className='input' type="text" />
                    <button className='button'>Send</button>
                </div>
            </div>
        </div>

    )
}
