
import "./App.css";
import Garage from "./components/Garage";
import AddCar from "./components/AddCar";
import React, { Component } from 'react';

class App extends Component {
  static my_car_seq = 4
  state = {
    my_cars: [
      {brand:"Honda", model:"Civic", color:"pink", id: 1 },
      {brand:"Ferrari", model:"Testa Rossa", color:"red", id: 2 },
      {brand:"Chevrolet", model:"cavalier", color:"green" ,id: 3 }
    ]
  }
  deleteCar = _id => {
      const new_cars = this.state.my_cars.filter(car => car.id !== _id)
      this.setState({
        my_cars: new_cars
      })
  }
  render() {
    return (
      <div>
        <header className="App-header">
            <h1>My Garage</h1>
            <AddCar />
            <hr />
            <Garage cars={this.state.my_cars} 
              delete_car={this.deleteCar}/> 
        </header>
      </div>
    );
  }
}

export default App;
