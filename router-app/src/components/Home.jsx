import React from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => {
                console.log("logical task....");
                navigate("/about", { replace: true });
            }}>About</button>
            <button>Contact</button>
            <button>Projects</button>
        </div>
    )
}


// login --> home
// navbar - menus - click navigate - home
// login page -- button(replace:true) --> home
