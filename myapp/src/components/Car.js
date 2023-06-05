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
        return (
        <div key={id}>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p style={{color}}>Color: {color}</p>
            <p>Year: {year}</p>
            <button style={{color: 'red'}} onClick={ () => this.props.delete_car(id) }>X</button>
            <hr />
        </div>
        )
    }
}

export default Car;