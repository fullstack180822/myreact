import React, {useState} from "react"

const  ShareReducer = ({dispatch, ACTIONS}) => {
 
    return (
      <>
        <span>Inner reducer</span><br />
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}> + </button>
      </>
    )
  } 

  export {ShareReducer};