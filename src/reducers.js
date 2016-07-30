import { combineReducers } from 'redux';
import { games } from './game/reducer';

const App = combineReducers({
  games,
});

export default App;
