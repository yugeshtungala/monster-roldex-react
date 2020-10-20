import React, { Component } from 'react';
import Axios from 'axios'

import './App.css';
import CardList from './components/Card-List';
import Searchbox from './components/search-box/Searchbox';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters:[],
      searchField:''

    }
  }


componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.data)
  .then(monsters=>this.setState({monsters}))
}
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters= monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div  className="App">
        <h1>Monster Roldex</h1>
        <Searchbox placeholder="Search Monster here" handleChange={e=> this.setState({searchField:e.target.value})} />
        <CardList monsters={filteredMonsters} >
      
        </CardList>
         
      </div>
    );
  }
}

export default App;


