import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className="gms__header section__padding" id="home">
        <div className="gms__header-content">
          <h1 className="gms__header-title">
                  Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className='gms__header-content-description'> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <div className="gms__header-content-input">
            <input type="email" placeholder ="Your Email..." />
            <button type="button">Get Started</button>
          </div>
          <div className="gms__header-content-people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>

        </div>
        <div className="gms__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header