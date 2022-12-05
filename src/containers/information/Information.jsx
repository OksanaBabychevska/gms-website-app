import React from 'react';
import './information.css';
import  Feature  from '../../components/feature/Feature'

const Information = () => {
  return (
    <div className='gms__information section__margin' id="information">
        <div className="gms__information-features">
            <Feature title="What is GMS" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            <div className="gms__information-header">
              <h2 className="gradient-text">
              The possibilities are beyond your imagination
              </h2>
              <p>Explore The Library</p>
            </div>
            <div className="gms__information-container">
            <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
            <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    </div>
  )
}

export default Information