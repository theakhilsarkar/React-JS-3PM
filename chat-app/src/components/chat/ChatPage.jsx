import React, { useEffect, useState } from 'react'
import "./chat-style.css";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { sendMessage, readMessages, deleteMessage } from '../../slices/chatSlice'
import { getUser, getCurrentUser } from '../../slices/userSlice'

export default function ChatPage() {

    const dispatch = useDispatch();
    const location = useLocation();
    // let { currentUser, user } = useSelector(state => state.user);
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const { chats } = useSelector(state => state.chats);
    const [message, setMessage] = useState("");

    const receiver = location.state;

    useEffect(() => {
        dispatch(getUser());
        dispatch(readMessages({ sender: currentUser.email, receiver: receiver.email }));
    }, [])

    const handleSendMessage = () => {
        dispatch(sendMessage({ message: message, sender: currentUser.email, receiver: receiver.email }))
        dispatch(readMessages({ sender: currentUser.email, receiver: receiver.email }));
        setMessage("");
    }

    const handleDeleteMessage = (chatId) => {
        dispatch(deleteMessage({ sender: currentUser.email, receiver: receiver.email, chatId: chatId }));
        dispatch(readMessages({ sender: currentUser.email, receiver: receiver.email }));
    }

    return (
        <div className='main'>
            <div className='chat-box'>
                <div className='chat-view'>
                    <h3>{receiver.email}</h3>
                    <div>
                        {
                            chats.map((chat, i) => {
                                const position = chat.sender == currentUser.email ? 'message-end' : 'message-start'
                                return <div onDoubleClick={() => handleDeleteMessage(chat.chatId)} key={i} className={`message-div ${position}`}><span className='message-box' >{chat.message}</span></div>
                            })
                        }
                    </div>
                </div>
                <div className='input-div'>
                    <input onChange={(e) => setMessage(e.target.value)} value={message} className='input' type="text" />
                    <button onClick={handleSendMessage} className='button'>Send</button>
                </div>
            </div>
        </div>

    );
}
