
import "./App.css";
import Car from './components/Car'

function App() {
  return (
    <div>
      <header className="App-header">
          <h1>My App</h1>
          <Car brand="Honda" model="Civic" color="black"/>
          <Car brand="Ferrari" model="Testa Rossa" color="red"/>
          <Car brand="Chevrolet" model="cavalier" color="green"/>
      </header>
    </div>
  );
}

export default App;
