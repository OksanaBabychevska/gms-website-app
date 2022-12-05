import React from 'react';
import './article.css';

const Article = ({ imgUrl, altAttr, date, title }) => {
  return (
    <div className='gms__article-container'>
      <div className="gms__article-container-image">
        <img src={imgUrl} alt={altAttr}/>
      </div>
      <div className="gms__article-container-text">
        <p>{date}</p>
        <h4>{title}</h4>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;