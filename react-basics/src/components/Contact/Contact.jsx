import React, { useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const email = useRef(""); // real DOM
  const phone = useRef(""); // real DOM

  //   useState - state change - component re-render

  const handleSubmit = () => {
    console.log(email.current.value);
  };

  return (
    <div className="contact-div">
      <div className="contact">
        <h2>Contact Form</h2>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="example@mail.com" ref={email} />
        <input type="phone" placeholder="Enter your mobile no." />
        <input type="text" placeholder="Enter your idea.." />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

// monday
