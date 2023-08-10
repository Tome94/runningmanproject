import { combineReducers, createStore, applyMiddleware } from 'redux';
import { boardReducer } from '../pages/game/features/board/boardSlice.js';
import { turnReducer } from '../pages/game/features/turns/turn.js';
import {teamReducer} from '../pages/local/teamReducer.js';
import { canvasDrawingsSlice} from '../pages/canvas/canvasDrawingSlice.js';
import thunk from 'redux-thunk' 

const rootReducer = combineReducers({
  board: boardReducer,
  team: teamReducer,
  turn: turnReducer,
  canvasDrawings: canvasDrawingsSlice.reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
