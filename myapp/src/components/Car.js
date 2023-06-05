import React, { Component } from 'react';

class Car extends Component {
    render() {
        console.log(this.props);
        return (
        <div>
            <p>Brand: Honda</p>
            <p>Mondel: Civic</p>
            <p>Color: Black</p>
        </div>
        )
    }
}

export default Car;