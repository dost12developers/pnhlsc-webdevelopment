import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/product/all')
      .then(response=> response.json())
      .then(users => {this.setState({ products: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  
  render() {
    const { products, searchfield  } = this.state;
    
    const filteredRobots = products.filter(robot =>{
      const name = robot.name+' '+robot.companyName;
      return name.toLowerCase().includes(searchfield.toLowerCase()) ;
    });


    
    return !products.length ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Halal Products</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList products={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;