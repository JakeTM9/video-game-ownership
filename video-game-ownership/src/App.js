import logo from './logo.svg';
import './App.css';
import GameCardGrid from './components/GameCardGrid';
import nintendo_game_data from './data/nintendo_game_data.json';
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Switch Games</h1>
        </header>
        <GameCardGrid data={nintendo_game_data}>
        </GameCardGrid>
      </div>
  );
}

export default App;