import React from 'react';
import './brand.css';
import { google, slack, attlasian, shopify, dropbox } from './imports.js'

const Brand = () => {
  return (
    <div className='gms__brand section__padding'>
          <div>
            <img src={google} alt="google" />
          </div>
          <div>
            <img src={slack} alt="slack" />
          </div>
          <div>
            <img src={attlasian} alt="attlasian" />
          </div>
          <div>
            <img src={dropbox} alt="dropbox" />
          </div>
          <div>
            <img src={shopify} alt="shopify" />
          </div>
    </div>
  )
}

export default Brand