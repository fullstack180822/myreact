
import Car from './Car'
import React, { Component } from 'react';

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
                     delete_car = {this.props.delete_car}/>)
            }
      </div>
    );
  }
}

export default Garage;
