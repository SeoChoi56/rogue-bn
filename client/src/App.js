import logo from './logo.svg';
import './App.css';
import GameCanvas from './Canvas';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <GameCanvas />
    </div>
  );
}

export default App;
