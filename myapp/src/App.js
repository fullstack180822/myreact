
import "./App.css";
import Car from './components/Car'
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
            {
              this.state.my_cars.map
              (_car => <Car brand={_car.brand} 
                model={_car.model} color={_car.color}
                id={_car.id} key={_car.id}/>)
            }
        </header>
      </div>
    );
  }
}

export default App;
