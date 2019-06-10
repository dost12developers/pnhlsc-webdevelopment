import React from 'react';
import './OurService.css';
import Footer from './Footer';
import './Nav.css'
import './Footer.css'
const OurService = ({onRouteChange}) => {
  return (
    <div>
        
        <header className='sans-serif'>
        <div className='cover bg-left bg-center-l mybackground'>
            <div className='bg-black-80 pb5 pb6-m pb7-l'>
            <nav className='dt w-100 mw8 center'> 
                <div className='dtc w2 v-mid pa3'>
                <a href='/' className='dib w2 h2 pa1 b--white-90 grow-large border-box'>
                    <img  className='br-100 h3 w3 dib' alt="" src="http://halalscience.ph/static/img/nav/logo2.png" />
                </a>
                </div>
                <div className='dtc v-mid tr pa3'>
                <button className='f6 pv2 ph3 dim-large  ' onClick={() => onRouteChange('home')}  >Homes</button> 
                <button className='f6 pv2 ph3 dim-large  ' onClick={() => onRouteChange('lab')} >Our Laboratory</button> 
                <button className='f6 pv2 ph3 dim-large  ' onClick={() => onRouteChange('halalprocess')} >Halal Lab Certifiation Process</button> 
                <button className='f6 pv2 ph3 dim-large  ' onClick={() => onRouteChange('about')}  >About Us</button> 
                <button className='f6 pv2 ph3 dim-large  ' onClick={() => onRouteChange('contact')}  >Contact Us</button> 
                </div>
            </nav> 
            <div className='tc-l mt4 mt5-m mt6-l ph3'>
                <h1 className='f2 f1-l fw2 white-90 mb0 lh-title'>Philippine National Halal Laboratory and Science Center (PNHLSC)</h1>
                <h2 className='fw1 f4 white-80 mt3 mb4'>The PNHLSC is the premier institution under the Department of Science and Technology Regional Office 12 in the Republic of the Philippines.</h2>    
                <a className='f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3' href='#service'>Our Service</a>      
                <a className='f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3' href='http://product.halalscience.ph'>Our Halal Products</a>
            </div>
            </div>
        </div> 
        </header>
    
    
    <main id="service" className="pa3 pa6-ns">
        <section className=' mw8 center'>
        <h2 className='athelas ph3 ph0-l tc'>Our Service</h2>

        <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
            <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Halal Certification</h1>
            <p className="f5 f4-l lh-copy athelas">
            This is one certification that food institutions can attempt to acquire. As a result, it will increase their client base. Individuals will touch on problems relating to culture, or spiritual harmony. However, as an area wherever we tend to far-famed for our food, the halal certification is perhaps one amongst the most important impacts of Islam Globally. DOST XII certifies the product underneath the reverent coordination of recognized Islamic law higher-up Board, extremely qualified Food Technologists, and R&D professionals in respect of eligibility for Certification through analysis primarily based methodology scrutinizing the sources of ingredients, examining the whole offer chain, chemical examination and analyzing sharia law prospects of ingredients used among the product.
            </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns tc">
                <img src="http://halalscience.ph/static/img/service/halal-assessment.jpg" alt="" />
            </div> 
            </div>
        </article>

        <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
            <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Laboratory Testing</h1>
            <p className="f5 f4-l lh-copy athelas">
            Halal Standardization is that the method of implementing and developing halal technical standards supported the agreement of different parties that embody corporations, users, interest teams, standards organizations and governments standardizations will facilitate to maximize halal compatibility, ability, safety, repeatability or quality. Generally, our Halal Assurance System adheres to the Halal Standards set by the OIC-SMIIC. And since each country has specific statutory and regulatory requirements, the same must also be complied accordingly. The firm to be granted Certificated on Halal Quality Assurance must undergo thorough Halal assessment and evaluation by DOST XII in partnership with the Ulamas and Shariah Lawyers, whenever necessary. Finally, products must passed thru Halal Laboratory Test Analyses thru the DOST XII Halal Laboratory. Aside from testing and analyses, we carry-out Packaging and Labelling.
            </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns tc">
                <img src="http://halalscience.ph/static/img/service/service_lab_small.jpg" alt="" />
            </div> 
            </div>
        </article>

        <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
            <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f3 athelas mt0 lh-title">Halal Research and Development</h1>
            <p className="f5 f4-l lh-copy athelas">
            To Establish Halal work Synergize with Government and Non Government authorities for Halal Research and Development. Develop a Globally network for Halal business analysis for sharing the experience internationally. The Halal world market is promising a fast and sustained growth. The reasons of the prompt growing are multiple. The importance of this market has on the worldwide scene, discussing in-depth development from the social control and innovation management views. galvanized by this chance, DOST XII try to explore comprehensive innovation method leading firms from Haram to Halal product within the food business.
            </p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns tc">
                <img src="http://halalscience.ph/static/img/service/service_halal_dev.jpg" alt="" />
            </div> 
            </div>
        </article>

        </section>

        
        </main>
        <Footer />
        </div>
  );
}

export default OurService;