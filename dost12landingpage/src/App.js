import React, {Component} from 'react';
import './App.css';


// import OurLab from './components/OurLab';
// import OurProcess from './components/OurProcess';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';
import OurService from './components/OurService';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route:'home',
      component : ''

    }
  }
  onRouteChange = (route) => {
   // this.setState({route:route})
   if( route === 'home'){
     this.setState({route :route});
   }else if(route === 'lab'){
      import('./components/OurLab').then( (OurLab) => {
        this.setState({route : route, component: OurLab.default})
      })
  }else if(route === 'halalprocess'){
    import('./components/OurProcess').then( (OurProcess) => {
      this.setState({route : route, component: OurProcess.default})
    })
  }else if(route === 'about'){
    import('./components/AboutUs').then( (AboutUs) => {
      this.setState({route : route, component: AboutUs.default})
    })
  }else if(route === 'contact'){
    import('./components/Contact').then( (Contact) => {
      this.setState({route : route, component: Contact.default})
    })
  }

  }
  render(){
    
        // if(this.state.route === 'home'){
        //   return <OurService onRouteChange={this.onRouteChange}/>
        // }else if (this.state.route === 'lab'){
        //     return <OurLab onRouteChange={this.onRouteChange}/>
        // }
        // else if (this.state.route === 'halalprocess'){
        //   return <OurProcess onRouteChange={this.onRouteChange}/>
        // }
        // else if (this.state.route === 'about'){
        //     return <AboutUs onRouteChange={this.onRouteChange}/>
        // }else if (this.state.route === 'contact'){
        //   return  <Contact onRouteChange={this.onRouteChange}/>
        // }

      if(this.state.route === 'home'){
           return <OurService onRouteChange={this.onRouteChange}/>
       }else{
           return <this.state.component onRouteChange={this.onRouteChange} />
       }

      
  }
}

export default App;
