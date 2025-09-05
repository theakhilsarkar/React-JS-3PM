import React from 'react'

export default function NewsFeed() {
    return (
        <div>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <div class="col">
                                <div class="card shadow-sm">
                                    <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" height="225"
                                        preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c"></rect>
                                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                                            Thumbnail
                                        </text>
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                                    View
                                                </button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                                    Edit
                                                </button>
                                            </div>
                                            <small class="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
