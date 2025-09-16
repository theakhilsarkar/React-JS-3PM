import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("user");
        navigate("/", { replace: true })
    }

    return (
        <div>
            <nav>
                <Link to={"/about"}>About</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/contacts"}>Contact</Link>
                <Link to={"/carts"}>Cart</Link>

                <button onClick={logoutUser}>Log Out</button>
            </nav>
        </div>
    )
}
