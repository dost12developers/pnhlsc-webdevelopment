import React from 'react';
import '../containers/App.css'

const Card = ({ name, description, codefilename, logofilename, companyName, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3'>
     <div className="parent">
      <img alt='products' src={`http://product.halalscience.ph/static/img/product/${codefilename}.jpg`} height='200px' width='200px'/>
      <img alt='' className='over-img' src={`http://product.halalscience.ph/static/img/logo/${logofilename}.png`} height='30px' width='30px'/>
      </div>
      <div>
        <div className="f4 athelas">{name}</div>
        <div className="ttc calisto">{companyName}</div>
      </div>
    </div>
  );
}

export default Card;
