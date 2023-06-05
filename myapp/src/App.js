
import "./App.css";
import Garage from "./components/Garage";
import React, { Component } from 'react';

class App extends Component {
  static my_car_seq = 4
  state = {
    my_cars: [
      {brand:"Honda", model:"Civic", color:"black", id: 1 },
      {brand:"Ferrari", model:"Testa Rossa", color:"red", id: 2 },
      {brand:"Chevrolet", model:"cavalier", color:"green" ,id: 3 },
    ]
  }
  render() {
    return (
      <div>
        <header className="App-header">
            <h1>My App</h1>
            <Garage cars={this.state.my_cars}/> 
        </header>
      </div>
    );
  }
}

export default App;
