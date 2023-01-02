import { Component } from 'react';
import Tricks from '../Tricks/Tricks'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => this.setState({tricks: data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <div>
          <Tricks tricks={this.state.tricks} />
        </div>
      </div>
     
    );
  }
}

export default App;