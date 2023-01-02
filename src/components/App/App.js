import { Component } from 'react';
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form';
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

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <div>
          <Form addTrick={this.addTrick} />
          <Tricks tricks={this.state.tricks} />
        </div>
      </div>
     
    );
  }
}

export default App;