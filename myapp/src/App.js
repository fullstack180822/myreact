
import './App.css';
import  { UseStateCounter } from './Counter';
import  { UseEffectDemo } from './UseEffectDemo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>--Start Your App--</h1>
          <UseStateCounter />
          <UseEffectDemo />
      </header>
    </div>
  );
}

export default App;
