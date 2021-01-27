import React, { Component} from 'react';
import Button from "./components/Button.js";
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      current: '',
      previous: []
    }
  }

  reset = () => {

    this.setState({result: '0'});
  }

  addToCurrent = (symbols) => {

    this.setState({current: this.state.current + symbols});


  }

  render() {

    const buttons = [
      //This is an object
      {symbols: 'C', cols: 1, action: this.reset},
      {symbols: '/', cols: 3, action: this.addToCurrent},
      {symbols: '7', cols: 1, action: this.addToCurrent},
      {symbols: '8', cols: 1, action: this.addToCurrent},
      {symbols: '9', cols: 1, action: this.addToCurrent},
      {symbols: 'X', cols: 1, action: this.addToCurrent},
      {symbols: '4', cols: 1, action: this.addToCurrent},
      {symbols: '5', cols: 1, action: this.addToCurrent},
      {symbols: '6', cols: 1, action: this.addToCurrent},
      {symbols: '-', cols: 1, action: this.addToCurrent},
      {symbols: '1', cols: 1, action: this.addToCurrent},
      {symbols: '2', cols: 1, action: this.addToCurrent},
      {symbols: '3', cols: 1, action: this.addToCurrent},
      {symbols: '+', cols: 1, action: this.addToCurrent},
      {symbols: '0', cols: 2, action: this.addToCurrent},
      {symbols: '.', cols: 1, action: this.addToCurrent},
      {symbols: '=', cols: 1, action: this.addToCurrent},

    ];

    return (

      <div className="App">
        <input className="result" type="text" value={this.state.current}></input>

      
        {buttons.map((btn, i)=> { //Buttons will appear based on the array along with symbols

          return <Button symbols={btn.symbols} cols={btn.cols} action={(symbols) => btn.action}/>

        })}
      </div>

    );
  }
}

export default App;
