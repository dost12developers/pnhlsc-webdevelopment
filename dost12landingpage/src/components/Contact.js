import React from 'react';
import './Nav.css'
import Footer from './Footer';

const Contact = ({onRouteChange}) => {
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
        <iframe title="PNHLSC"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.269232860099!2d124.8188839710073!3d6.4875511111012925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f818d8a36ca2fb%3A0x99e83b68f13d07e2!2zNsKwMjknMTguOSJOIDEyNMKwNDknMDcuOCJF!5e0!3m2!1sen!2sph!4v1548988700827"
              className='fl w-90'></iframe>

                  <p class="f4 lh-copy measure">
									Call:+ 064 421 2711<br></br> <span>Monday-Friday
										(9am-5pm)</span>
                    </p>
                <p class="f4 lh-copy measure">
									Email Address of the Regional Director:<br></br>
									zenaidalaidan.dost12@gmail.com<br></br>
									</p>
                <p class="f4 lh-copy measure">
									Location: Department of Science and Technology Region XII<br></br>
									Philippine National Halal Laboratory Science Center<br></br> <span>Koronadal
										City, Philippines</span>
								</p>
                <br/>
                <br/> <br/> <br/> <br/>
        </main>
        <Footer />
   
    </div>
    
  );
}

export default Contact;
