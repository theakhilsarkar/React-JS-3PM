import React, { useEffect, useState } from 'react'

export default function Home() {

    // mount - create --> fresh
    // update ==> value
    // unmount - destroy - clear
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // handler function -> its handle any specific process/feature/functionality in compnent
    // services --> api,database,firebase

    // array : 
    // object({key:value}) : 
    // its hold multiple values.

    const handleInput = () => {
        // useState, userRef
        sessionStorage.setItem("user", JSON.stringify({
            "username": username,
            "password": password
        }));
    }

    const handleFetchUser = () => {
        const str = sessionStorage.getItem("user") || "";
        if (str != "") {
            const user = JSON.parse(str);
            setUsername(user.email)
            setPassword(user.password)
        }
    }

    // call when component render
    useEffect(() => {
        handleFetchUser();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {/* <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleInput}>Add</button> */}


            <h3>{username}</h3>
            <h3>{password}</h3>


        </div>
    )
}


// 