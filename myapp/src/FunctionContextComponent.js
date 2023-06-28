import React, {useContext} from "react"
import {useTheme, useThemeUpdate} from './ThemeContext'

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333' ,
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <br />
            <div style={themeStyles}>Function Theme</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export {FunctionContextComponent};