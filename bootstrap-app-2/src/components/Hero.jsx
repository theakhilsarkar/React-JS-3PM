import React from 'react'

export default function Hero() {
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-body-secondary">
                            Something short and leading about the collection below—its contents, the
                            creator, etc. Make it short and sweet, but not too short so folks don’t
                            simply skip over it entirely.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 mx-2">
                                Main call to action
                            </a>
                            <a href="#" className="btn btn-secondary my-2">
                                Secondary action
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
