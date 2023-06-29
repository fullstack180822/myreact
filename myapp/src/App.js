
import './App.css';
import  { UseStateCounter } from './Counter';
import  { UseEffectDemo } from './UseEffectDemo';
import React, {useState} from "react"
import {ThemeProvider} from './ThemeContext'
import { FunctionContextComponent } from './FunctionContextComponent';
import { ReducerDemo} from './ReducerDemo';
import {useLocalStorage} from './CustomHook'
import useUpdateLogger from './CustomHook2'

function App() {

  const [name, setName] = useLocalStorage('name', '');

  useUpdateLogger(name)

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
                <br />
                  <input type="text" value={name} 
                  onChange={e => setName(e.target.value)} />
              </header>
            </div>
      )
}

export default App;
