import { combineReducers, createStore, applyMiddleware } from 'redux';
import { boardReducer } from '../pages/game/features/board/boardSlice.js';
import { turnReducer } from '../pages/game/features/turns/turn.js';
import {teamReducer} from '../pages/local/teamReducer.js';
import thunk from 'redux-thunk' 

const rootReducer = combineReducers({
  board: boardReducer,
  team: teamReducer,
  turn: turnReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
