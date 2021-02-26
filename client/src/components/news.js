import React, { Component } from 'react';
import './news.css';
import NewsCard from '../newsComp';

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('/getnews')
      .then(resp => resp.json())
      .then(news => this.setState({news}, () => console.log('news fetched...', news)));
  }

  render() {
    return (
      <div>
          <h1 className="news-heading">Top News</h1>
          {this.state.news.map((n)=>{
            if (n.urlToImage !== null && n.content != null){
              return <NewsCard name = {n.title} desc = {n.content} url = {n.url} date={n.publishedAt} img={n.urlToImage}/>
            }
          })}
          
      </div>
    );
  }
}

export default News;
