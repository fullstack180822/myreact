import React, { Component } from 'react';

class Car extends Component {
    deleteCar() {

    }
    render() {
        console.log(this.props);
        //const brand = this.props.brand
        //const color = this.props.color
        //const model = this.props.model        
        const { id, brand, color, model, year  } = this.props
        return !this.props.update ?
             (<div key={id}>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p style={{color}}>Color: {color}</p>
                <p>Year: {year}</p>
                <button style={{color: 'red'}} onClick={ () => this.props.delete_car(id) }>X</button>
                &nbsp;
                <button style={{color: 'blue'}} onClick={ () => this.props.start_update(id) }>U</button>
                <hr />
            </div>) : 
            (<div key={id}>
                <p>Brand: <input name="brand" type="text" onChange={this.handleChange} 
                     placeholder="car brand" required/></p>
                     <p>Model: <input name="model" type="text" onChange={this.handleChange} 
                     placeholder="car model" required/></p>
                 <p >Color:  &nbsp;
                 <select name="color" id="color_id" onChange={this.handleChange}>
                       <option value="green" style={{color: "green"}}>Green</option>
                       <option value="red" style={{color: "red"}}>Red</option>
                       <option value="orange" style={{color: "orange"}}>Orange</option>
                       <option value="pink" style={{color: "pink"}}>Pink</option>
                       <option value="black" style={{color: "black"}}>Black</option>
                       <option value="blue" style={{color: "blue"}}>Blue</option>
                     </select>
                     </p>  
                  <p>Year: <input name="year" type="number" onChange={this.handleChange} 
                     placeholder="year" required/></p>              
       
                <button style={{color: 'red'}} onClick={ () => this.props.delete_car(id) }>X</button>
                &nbsp;
                <button style={{color: 'green'}} onClick={ () => this.props.finish_update(id) }>Done</button>
                <hr />
            </div>)         

    }
}

export default Car;