import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='gms__features-container__feature'>
        <div className='gms__features-container__feature-title'>
            <div className='gms__features-container__feature-line'></div>
            <h3>{title}</h3>
        </div>
        <div className="gms__container__feature-text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature