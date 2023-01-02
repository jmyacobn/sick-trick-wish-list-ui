import { Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: 'Choose your Stance',
      name: '',
      obstacle: 'Choose your Obstacle',
      tutorial: ''
    }
  }

  render() {
    return (
      <form>
        <select>
          <option value='Choose your Stance'>Choose your Stance</option>
          <option value='Regular'>Regular</option>
          <option value='Switch'>Switch</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
        />
        <select>
          <option value='Choose your Obstacle'>Choose your Obstacle</option>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
        <input 
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
        />
      </form>
    )
  }
}

export default Form;