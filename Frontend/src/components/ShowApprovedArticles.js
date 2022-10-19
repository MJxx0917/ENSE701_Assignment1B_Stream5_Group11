import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApprovedArticleCard from './ApprovedArticleCard';

class ShowApprovedArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/articles/Live/') //Get all articles pending moderation
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticleList');
      })
  };


  render() {
    const articles = this.state.articles;
    let articleList;

    if(!articles) {
      articleList = "there is no article record!";
    } else {
      articleList = articles.map((article, k) =>
        <ApprovedArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Approved Articles</h2>
              <br/>
            </div>
          </div>
          <br/>

          <div className="list">
                {articleList} 
          </div>
          <div className="rowC">
                <Link to="/main-menu-user" className="btn btn-outline-warning">
                  Return to Menu for User
                </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default ShowApprovedArticles;