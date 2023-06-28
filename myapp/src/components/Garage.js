
import Car from './Car'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Garage extends Component {
  render() {
    console.log(this.props.filter_by_year);
    return (
      <div>
            {
                this.props.cars.filter(_car => _car.year >= this.props.filter_by_year).map(_car => 
                <Car brand={_car.brand} model={_car.model} color={_car.color} id={_car.id}
                     year={_car.year} key={_car.id} 
                     update={_car.update}
                     start_update={this.props.start_update}
                     finish_update={this.props.finish_update}
                     delete_car = {this.props.remove_car}/>)
            }
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
    classes: store_state.my_cars
  } 
}

// dispatch action to redux
const mapDispatchToProps = (dispatch) => {
  return {
    remove_car: id_ => dispatch({type:'remove_car', id_}),
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Garage);

