import React, { useState, useEffect } from 'react';
import './news.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/news"); 
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const rows = [];
  let row = [];

  articles.forEach((article, index) => {
    row.push(
      <div key={index} className="article">
        <img src={article.urlToImage} alt={article.title} />
        <h3>{article.title}</h3>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    );

    if (row.length === 3 || index === articles.length - 1) {
      rows.push(
        <div key={index} className="article-row">
          {row}
        </div>
      );
      row = [];
    }
  });
  return (
    <div>
      <h2 className='headline'>News Headlines</h2>
      {articles.length === 0 ? (
        <p className='no_article'>No weather news articles found today.</p>
      ) : (
        <div>
        {rows}
        </div>
  )}
    </div>
  );
};

export default News;
