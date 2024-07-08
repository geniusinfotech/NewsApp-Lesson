import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'



export default class News extends Component {

        static defaultProps={
            country: 'in',
            pageSize: 6,
            category: 'general',
        }

        static propTypes= {
            country: PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string,
        }



    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1, 
            
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa1ec8c7f92b4b7f93c1e508caeb40b6&pagesize=${this.props.pageSize}&page=1`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState(
            { 
            articles: parsedData.articles, 
            totalResult: parsedData.totalResult,
            loading: false
        });
    }


    handlePrivousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa1ec8c7f92b4b7f93c1e508caeb40b6&pagesize=${this.props.pageSize}&page=${this.state.page - 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }


    handleNextClick = async () => {
        console.log("Next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa1ec8c7f92b4b7f93c1e508caeb40b6&pagesize=${this.props.pageSize}&page=${this.state.page + 1}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false

            })
        }
    }

    render() {
        console.log("render");
        return (
            <div className='container my-3'>
                <h1>NewsApp- Top Headlines</h1>
                {this.state.loading && <Spiner />}
                <div className="row">
                    {! this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    }
                    )}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrivousClick}>&larr; Prvious</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>

            </div>
        )
    }
}
