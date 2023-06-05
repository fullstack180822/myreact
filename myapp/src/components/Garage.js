
import Car from './Car'
import React, { Component } from 'react';

class Garage extends Component {
  render() {
    return (
      <div>
            {
              this.props.cars.map(_car => 
                <Car brand={_car.brand} model={_car.model} color={_car.color} id={_car.id} key={_car.id}/>)
            }
      </div>
    );
  }
}

export default Garage;
