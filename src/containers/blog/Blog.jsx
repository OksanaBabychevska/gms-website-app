import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gms__blog section__padding' id="blog">
      <div className="gms__blog-heading">
        <h3 class='gradient__text'>A lot is happening,<br />
         We are blogging about it.</h3>
      </div>
      <div className="gms__blog-container">
        <div className="gms__blog-container_groupA">
          <Article imgUrl={blog01} altAttr='blog image' date='Dec, 5, 2022' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
        </div>
        <div className="gms__blog-container_groupB">
          <Article imgUrl={blog02} altAttr='blog image' date='Dec, 5, 2022' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
          <Article imgUrl={blog03} altAttr='blog image' date='Dec, 5, 2022' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
          <Article imgUrl={blog04} altAttr='blog image' date='Dec, 5, 2022' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
          <Article imgUrl={blog05} altAttr='blog image' date='Dec, 5, 2022' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'></Article>
        </div>
      </div>
    </div>
  )
}

export default Blog