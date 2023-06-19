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

  return (
    <div>
      <h2 className='headline'>News Headlines</h2>
      {articles.length === 0 ? (
        <p className='no_article'>No weather news articles found today.</p>
      ) : (
        articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.url}</p>
            <img src={article.urlToImage} alt={article.title} />
          </div>
        ))
      )}
    </div>
  );
};

export default News;
