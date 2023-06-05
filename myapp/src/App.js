
import "./App.css";
import Car from './components/Car'

function App() {
  return (
    <div>
      <header className="App-header">
          <h1>My App</h1>
          <Car brand="Honda" model="Civic" color="black"/>
          {/*Ferrari , Testa Rossa, red */}
          <Car />
          {/*Chevrolet , cavalier, green */}
          <Car />
      </header>
    </div>
  );
}

export default App;
