import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App">
        <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts/:post_id' component={Post} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
