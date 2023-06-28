import React, {useState} from "react"
import { useContext } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

const useTheme = () => {
    return useContext(ThemeContext);
}

const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, useTheme, useThemeUpdate};