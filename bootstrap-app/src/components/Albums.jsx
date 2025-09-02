import React, { useEffect, useState } from 'react'

export default function Albums() {


    const [articles, setArticles] = useState([]);

    const fetchNews = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=002efedd43a6481caededec969eda1b6").then(res => res.json()).then(data => setArticles(data.articles));
    }

    useEffect(() => { fetchNews() }, [])

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className='container text-center'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {
                        articles.map((news, index) => <div className='col' key={index}>
                            <div className="card" >
                                <img src={news.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">
                                        {news.description}
                                    </p>
                                    <a href={news.url} className="btn btn-primary">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}


// GG9Cb+jV4@wfDyY

// api key = 002efedd43a6481caededec969eda1b6