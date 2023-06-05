

import React, { Component } from 'react';

class AddCar extends Component {
  state = {
    car_from_input: {
      brand: "",
      model: "",
      color: "green"
    }
  }
  handleChange = (e) => {
    console.log(e.target.name);

    this.setState({
      car_from_input: {
        ...this.state.car_from_input,
        [e.target.name]: e.target.value
      }
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', JSON.stringify(this.state.car_from_input));

    // TODO: call add car
  }
  render() {
    return (
      <div>
        <h2>add new car</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Brand: <input name="brand" type="text" onChange={this.handleChange} 
              value={this.state.car_from_input.brand} placeholder="car brand" required/></p>
          <p>Model: <input name="model" type="text" onChange={this.handleChange} 
              value={this.state.car_from_input.model} placeholder="car model" required/></p>
          <p style={{color: this.state.car_from_input.color}}>Color:  &nbsp;
          <select name="color" id="color_id" onChange={this.handleChange}  style={{color: this.state.car_from_input.color}}
              value={this.state.car_from_input.color}>
                <option value="green" style={{color: "green"}}>Green</option>
                <option value="red" style={{color: "red"}}>Red</option>
                <option value="orange" style={{color: "orange"}}>Orange</option>
                <option value="pink" style={{color: "pink"}}>Pink</option>
              </select>
              </p>  
         <button type="submit">Buy New Car</button>
        </form>
      </div>
    );
  }
}

export default AddCar;
