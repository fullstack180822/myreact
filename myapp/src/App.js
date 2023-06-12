
import "./App.css";
import Garage from "./components/Garage";
import AddCar from "./components/AddCar";
import CarFilter from "./components/CarFilter";
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
   static my_car_seq = 4
   state = {
  //   my_cars: [
  //     {brand:"Honda", model:"Civic", color:"pink", year: 2023, id: 1 , update: false},
  //     {brand:"Ferrari", model:"Testa Rossa", color:"red", year: 2022, id: 2, update: false },
  //     {brand:"Chevrolet", model:"cavalier", color:"green" ,year: 2021, id: 3, update: true }
  //   ],
    //  filter_by_year: 0
   }
  deleteCar = _id => {
      const new_cars = this.state.my_cars.filter(car => car.id !== _id)
      this.setState({
        my_cars: new_cars
      })
  }
  addCar = car => {
    //Object.assign([], this.state.my_cars)
    // const new_cars = [...this.state.my_cars, {...car, id: App.my_car_seq++}]
    // this.setState({
    //   my_cars: new_cars
    // })
    this.props.add_car(car)
  }
  filterByYear = year => {
      // this.setState({
      //   filter_by_year: year
      // })
      this.props.update_filter_by_year(year)
  }
  startUpdate = _id => {
    // const new_cars = this.state.my_cars.map(car => _id == car.id ? 
    //   {...car, update: true} : {...car, update: false} )
    //   this.setState({
    //     my_cars: new_cars
    //   })      
      this.props.start_update(_id)
  }
  finishUpdate = _id => {
    // const new_cars = this.state.my_cars.map(car =>  _id > 0 ? {...car, update: false}:
    //   {...car, update: false} )
    //   this.setState({
    //     my_cars: new_cars
    //   })    
    this.props.finish_update(_id)

  }  
  render() {
    console.log('propssssssss');
    console.log(this.props.my_cars);
    console.log(this.props.filter_by_year);
    return (
      <div>
        <header className="App-header">
            <h1>My Garage</h1>
            <AddCar add_car={this.addCar} />
            <hr />
            <CarFilter filter_by_year={this.filterByYear}/>
            <hr />
            <Garage 
            //cars={this.props.my_cars} 
              //delete_car={this.deleteCar}
              filter_by_year={this.props.filter_by_year}
              start_update={this.startUpdate}
              finish_update={this.finishUpdate}
              /> 
        </header>
      </div>
    );
  }
}

// get state from redux into props
const mapStateToProps = (store_state, current_props) => {
  console.log('============')
  console.log(current_props);
  console.log('============')
  console.log('==== mapper state')
  console.log(store_state.my_cars)
  // returns the new props
  return {
    ...current_props,
    my_cars: store_state.my_cars,
    filter_by_year: store_state.filter_by_year,
    my_car_seq : store_state.my_car_seq
  } 
}

// dispatch action to redux
const mapDispatchToProps = (dispatch) => {
  return {
    add_car: new_car => dispatch( {type:'add_car', new_car } ),
    remove_car: id_ => dispatch({type:'remove_car', id_}),
    update_filter_by_year: _year => dispatch({type:'update_filter', _year}),
    start_update: _id => dispatch({type: 'start_update', _id}),
    finish_update: _id => dispatch({type: 'finish_update', _id})

  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
