import React, {useState} from "react"

const  ShareReducer = ({dispatch}) => {
 
    return (
      <>
        <span>Inner reducer</span><br />
        <button onClick={() => dispatch({ type: "increment" })}> + </button>
      </>
    )
  } 

  export {ShareReducer};