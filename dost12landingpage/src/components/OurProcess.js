import React from 'react';
import './Nav.css'
import Footer from './Footer';
import './OurProcess.css'


const OurProcess = ({onRouteChange}) => {
  return (
    <div>

        <header className='sans-serif'>
        <div className='cover bg-left bg-center-l mybackground'>
        <nav className='dt w-100 mw8 center'> 
                <div className='dtc w2 v-mid pa3'>
                <a href='/' className='dib w2 h2 pa1 b--white-90 grow-large border-box'>
                    <img  className='br-100 h3 w3 dib' alt="" src="http://halalscience.ph/static/img/nav/logo2.png" />
                </a>
                </div>
                <div className='dtc v-mid tr pa3'>
                <button className='f6 pv2 ph3' onClick={() => onRouteChange('home')}  >Homes</button> 
                <button className='f6 pv2 ph3' onClick={() => onRouteChange('lab')} >Our Laboratory</button> 
                <button className='f6 pv2 ph3' onClick={() => onRouteChange('halalprocess')} >Halal Lab Certifiation Process</button> 
                <button className='f6 pv2 ph3' onClick={() => onRouteChange('about')}  >About Us</button> 
                <button className='f6 pv2 ph3' onClick={() => onRouteChange('contact')}  >Contact Us</button> 
                </div>
            </nav> 
        </div> 
        </header>

        <div className="f2 tc">Our Process</div>
        <div className='tc'>
         <img className="fl w-80" alt="" src="http://halalscience.ph/static/img/service/halalprocess.jpg"/>
        </div>
        <div className="flex items-center justify-center pa4 bg-lightest-blue navy ">
           <div className="lh-title ml3 f3">Start The Certification Process Today or Inquire for more Information!</div>
            <a className='dib grow-large border-box f3' href='http://email.halalscience.ph/'> Send Us </a>
         </div>
     <Footer />
  
    </div>
  );
}

export default OurProcess;