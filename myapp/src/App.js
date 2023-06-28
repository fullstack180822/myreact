
import './App.css';
import  { UseStateCounter } from './Counter';
import  { UseEffectDemo } from './UseEffectDemo';
import React, {useState} from "react"
import {ThemeProvider} from './ThemeContext'
import { FunctionContextComponent } from './FunctionContextComponent';
import { ReducerDemo} from './ReducerDemo';

function App() {

  const [theme, setTheme] = useState("dark")

  return (
            <div className="App">
              <header className="App-header">
                <h1>--Start Your App--</h1>
                <UseStateCounter />
                <UseEffectDemo />
                <ThemeProvider>
                  <FunctionContextComponent />
                </ThemeProvider>
                <br /><br />
                <ReducerDemo />
              </header>
            </div>
      )
}

export default App;
