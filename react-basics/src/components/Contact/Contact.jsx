import React, { useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [user, setUser] = useState({
    name: "admin",
    email: "admin@gmail.com",
    phone: "9825486060",
    idea: "Want Meet for project?"
  }); // key-value

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const temp = { ...user }; // editable,
    temp[key] = value

    setUser(temp); // assign update variable in state.
  }

  // more tha 2 fields - 

  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <div className="contact-div">
      <div className="contact">
        <h2>Contact Form</h2>
        <input value={user.name} onChange={handleInput} name="name" type="text" placeholder="Enter your name" />
        <input value={user.email} onChange={handleInput} name="email" type="email" placeholder="example@mail.com" />
        <input value={user.phone} onChange={handleInput} name="phone" type="phone" placeholder="Enter your mobile no." />
        <input value={user.idea} onChange={handleInput} name="idea" type="text" placeholder="Enter your idea.." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="output">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.idea}</p>
      </div>
    </div>
  );
}

// monday
