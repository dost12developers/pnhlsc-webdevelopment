import React from 'react';
import './AboutUs.css'
import './Nav.css'
import Footer from './Footer';
  const AboutUs = ({onRouteChange}) => {
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
         <div className="f2">Philippine National Halal Laboratory and Science Center </div>
         <div className='f6'>About DOST XII - Philippine National Halal Laboratory </div>
					<p className="measure-wide">The Philippines National Halal Laboratory
						and Science Center is the premier institution under the Department
						of Science and Technology Regional Office 12 in the Republic of
						the Philippines.</p>

					<p className="measure-wide">The PNHLSC is manned and managed by
						competent and dedicated Muslim Ranking Officials, scientists and
						employees that ensures authenticity of results from tests and
						analysis of Products and maintain integrity and discipline to
						sustain customers trusts and confidence for the certified by the
						PNHCL Halal Products made by Filipino Manufacturers and exported
						from the Philippines to the global markets.</p>

					<p className="measure-wide ">The PNHLSC is equipped with state of the
						art laboratory equipment indispensable to determine the
						genuineness of Halal Products and can guarantee that its certified
						Halal Products of the manufacturers being supplied to the local
						and international consumers are authentic and free from
						adulteration and critical ingredients.</p>

					<p className="measure-wide">The PNHLSC is the main source of science
						and technology on Halal that can assist Halal patrons,
						practitioner, scientists and technologists including researchers
						and the academe and those that vested their interest upon Halal
						for their economic prosperity and physical wellness and
						improvements.</p>

                        <h4>Our Mandate</h4>
						
						<p className="measure-wide">The Philippine National Halal Centre and
								Laboratory is mandated to coordinate science and technology on
								Halal and ensure that the results therefrom will be utilized for
								the maximum benefits of the producers and consumers of Halal
								products.</p>
                        <h4 className="sec-headright">Our Vision</h4>
							
						<p className="measure-wide">The
								Philippine National Halal Centre and Laboratory will be the main
								passport of Halal Industry Products for both local and
								international consumers and the source of Halal knowledge for
								scientists, researchers and practitioners.</p>
                        
      
    </main>
        <Footer />
    </div>
  );
}

export default AboutUs;