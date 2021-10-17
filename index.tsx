import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import TemperatureConverter from './components/TemperatureConverter';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Counter name={this.state.name} />
        <TemperatureConverter />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
