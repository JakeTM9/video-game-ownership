import logo from './logo.svg';
import './App.css';
import GameCard from './components/GameCard';
import nintendo_game_data from './data/nintendo_game_data.json';

function App() {
  console.log(nintendo_game_data);
  return (
    <div className="App">
      <header className="App-header">
        {nintendo_game_data.map((game, index) => {
          console.log("yo")
          return <GameCard/>;
        })}
        
      </header>
      
    </div>
  );
}

export default App;
