import React from 'react';
import Footer from './Footer';
import './Nav.css'
import './OurLab.css'
const OurLab = ({onRouteChange}) => {
  return (
    <div>
        <header className='sans-serif'>
        <div className='cover bg-left bg-center-l mybackground'>
        <nav className='dt w-100 mw8 center'> 
                <div className='dtc w2 v-mid pa3'>
                <a href='/' className='dib w2 h2 pa1 b--white-90 grow-large border-box'>
                    <img  className='br-100 h3 w3 dib' alt="" src="/static/img/nav/logo2.png" />
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
        </div> 
        </header>
        <main className="pa3 pa5-ns">
        <h2 className="tc">Our Laboratory Testing</h2>
        <div className="tc fl w-100">
              <div className="f3">Halal Analysis</div>
              <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/1.jpg" alt=""/>
                   <h4>Porcine DNA Detection</h4>
				    <p className="justify-content">We are committed to provide latest technologies and reliable testing solution with improved efficiency in assessment of Halal food integrity. We provide Real Time PCR and Conventional PCR</p>
                    <p className="">Processing Days takes: <br></br>Real Time PCR- 14 days <br></br>Conventional PCR- 14 days</p>
               </div>
               <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/2.jpg" alt=""/>
                   <h4>Alcohol Analysis</h4>
				    <p className="justify-content">Alcohol can develop in foods as fermentation by products or it can be added to products as synthetic ethanol. We use GC method.</p>
                    <p className="">Processing Days takes: <br></br>Real Time PCR- 14 days <br></br>Conventional PCR- 14 days<br></br><br></br><br></br></p>
               </div>
               <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>   
                   <img className='mysize_item' src="/static/img/service/lab/3.jpg" alt=""/>
                   <h4>Fatty Acid Profiling</h4>
				    <p className="justify-content">Fatty Acids profiles can be used for determining the purity or authenticity of animal fats. In this method we use GCMS.</p>
                    <p className="">Processing Days takes: 14 days<br></br><br></br><br></br><br></br><br></br></p>
               </div>
                <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/4.jpg" alt=""/>
                   <h4>Thayyiban Analysis</h4>
				    <p className="justify-content">A Wholesome Analysis that is forsafety, cleanliness, nutritious, quality, authentic process.<br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>               
               </div>
         
        </div>
        <div className="tc fl w-100">
              <div className="f3">Thayyiban Analysis</div>
              <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/5.jpg" alt=""/>
                   <h4>Microbiological Analysis</h4>
				    <p className="justify-content">We test foods products to ensure that they are free from pathogenic bacteria and to assess hygiene standards. Tests can be carried out for routine quality control purposes.
											Every food product has to be tested & approved before it is
											put up for sale in the market. Microbiological testing also
											for waters can include production water, potable, bottled,
											effluent & environmental water.</p>
                    <p className="">Processing days: 7 days</p>
               </div>
               <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/6.jpg" alt=""/>
                   <h4>Physiochemical Analysis</h4>
				    <p className="justify-content">Chemical testing Analysis is vital for regulatory compliance
											and to understand the quality and composition of chemical
											substances and ingredients that are used in the water and
											food products.</p>
                    <p className="">Processing days: 7 days<br></br><br></br><br></br><br></br><br></br><br></br></p>
               </div>
               <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>   
                   <img className='mysize_item' src="/static/img/service/lab/7.jpg" alt=""/>
                   <h4>Nutrition Labelling Analysis</h4>
				    <p className="justify-content">The analysis of value and the nutritional content in foods
											and food products, will provides information for nutrition
											labeling on food packaging that manufacturers are required to
											comply with the labeling regulations of destination
											countries.</p>
                    <p className="">Processing Days: 1 month<br></br><br></br><br></br><br></br><br></br></p>
               </div>
                <div className=' grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 fl w-25 mymeasure'>
                   <img className='mysize_item' src="/static/img/service/lab/8.jpg" alt=""/>
                   <h4>Trace Metal Analysis</h4>
				    <p className="justify-content">Trace metals found in food and water can be nutritionally
											beneficial, or highly toxic depending on the type of metal
											and its concentration</p> 
                    <p className="">Processing days: 7 days<br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>             
               </div>
         
        </div>
        </main>

        <Footer />
    </div>
  );
}

export default OurLab;