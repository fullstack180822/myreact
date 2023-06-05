import React, { Component } from 'react';

class Car extends Component {
    render() {
        console.log(this.props);
        //const brand = this.props.brand
        //const color = this.props.color
        //const model = this.props.model        
        const { brand, color, model  } = this.props
        return (
        <div>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <hr />
        </div>
        )
    }
}

export default Car;