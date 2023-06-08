import React from 'react'
import Rainbow from './../hoc/Rainbow';

const About = (props) => {
    console.log(props)
    return (
        <div>
            <div className="container">
                <h4 className="center">About</h4>
                <p style={{color : props.rainbow_color}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Assumenda in voluptas dolorem recusandae quae expedita similique nobis neque 
                accusamus, architecto suscipit saepe odio aliquam nostrum ducimus laborum esse 
                optio voluptate.</p>
            </div>
        </div>
    )
}

export default Rainbow(About)