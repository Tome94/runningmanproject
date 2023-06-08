import { combineReducers, createStore } from 'redux';
import { boardReducer } from '../pages/game/features/board/boardSlice.js';
import {teamReducer} from '../pages/local/teamReducer.js';

const rootReducer = combineReducers({
  board: boardReducer,
  team: teamReducer,
});

export const store = createStore(rootReducer);
