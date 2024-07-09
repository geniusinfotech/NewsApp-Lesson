import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card border">
                    <img src={!imageUrl ? "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg" : imageUrl} className="card-img-top img-size" alt="..." />
                    <div className="card-body text-left">
                        <h5 className="card-title">{title}..  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
