
import "./App.css";
import Garage from "./components/Garage";
import AddCar from "./components/AddCar";
import CarFilter from "./components/CarFilter";
import React, { Component } from 'react';

class App extends Component {
  static my_car_seq = 4
  state = {
    my_cars: [
      {brand:"Honda", model:"Civic", color:"pink", year: 2023, id: 1 , update: false},
      {brand:"Ferrari", model:"Testa Rossa", color:"red", year: 2022, id: 2, update: false },
      {brand:"Chevrolet", model:"cavalier", color:"green" ,year: 2021, id: 3, update: true }
    ],
    filter_by_year: 0
  }
  deleteCar = _id => {
      const new_cars = this.state.my_cars.filter(car => car.id !== _id)
      this.setState({
        my_cars: new_cars
      })
  }
  addCar = car => {
    //Object.assign([], this.state.my_cars)
    const new_cars = [...this.state.my_cars, {...car, id: App.my_car_seq++}]
    this.setState({
      my_cars: new_cars
    })
  }
  filterByYear = year => {
      this.setState({
        filter_by_year: year
      })
  }
  startUpdate = _id => {
    const new_cars = this.state.my_cars.map(car => _id == car.id ? 
      {...car, update: true} : {...car, update: false} )
      this.setState({
        my_cars: new_cars
      })      
  }
  finishUpdate = _id => {
    const new_cars = this.state.my_cars.map(car =>  _id > 0 ? {...car, update: false}:
      {...car, update: false} )
      this.setState({
        my_cars: new_cars
      })    
  }  
  render() {
    return (
      <div>
        <header className="App-header">
            <h1>My Garage</h1>
            <AddCar add_car={this.addCar} />
            <hr />
            <CarFilter filter_by_year={this.filterByYear}/>
            <hr />
            <Garage cars={this.state.my_cars} 
              delete_car={this.deleteCar}
              filter_by_year={this.state.filter_by_year}
              start_update={this.startUpdate}
              finish_update={this.finishUpdate}
              /> 
        </header>
      </div>
    );
  }
}

export default App;
