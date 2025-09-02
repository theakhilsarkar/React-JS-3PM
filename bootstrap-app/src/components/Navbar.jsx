import React, { useState } from 'react'

export default function Navbar() {

    const [show, setShow] = useState("");
    return (

        <header data-bs-theme="dark">
            <div className={`text-bg-dark collapse ${show}`} id="navbarHeader" style={{}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4>About</h4>
                            <p className="text-body-secondary">
                                Add some information about the album below, the author, or
                                any other background context. Make it a few sentences long so folks
                                can pick up some informative tidbits. Then, link them off to some
                                social networking sites or contact information.
                            </p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4"> </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href="#" className="navbar-brand d-   align-items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            aria-hidden="true"
                            className="me-2"
                            viewBox="0 0 24 24"
                        >
                            {" "}
                            == $0
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2001-2-2V8a2 2001 2-2h412-3h612 3h4a2 20012 2z" />
                            <circle cx={12} cy={13} r={4} />
                        </svg>
                        <strong>Album</strong>
                    </a>
                    <button
                        onClick={() => setShow(show == "" ? "show" : "")}

                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-=""
                        target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </div>
        </header>


    )
}
