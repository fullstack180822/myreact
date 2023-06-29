import React, {useState} from "react"
import {useEffect} from 'react'

export default function useUpdateLogger(value)  {     
    useEffect(() => {
      console.log(value);
    }, [value])
}

