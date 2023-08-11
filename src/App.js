import './App.css';
import { CharacterDetail } from './components/CharacterDetail';
import { CharacterList } from './components/CharacterList';
import { VisualizationContainer } from './components/Visualization';

function App() {
  return (
    <div className="flex-container">
      <div className="large-block">
        <CharacterList/>
      </div>
      <div className="column">
        <div className="block">
          <CharacterDetail/>
        </div>
        <div className="block viz-block">
          <VisualizationContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
