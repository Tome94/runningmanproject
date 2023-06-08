import { combineReducers, createStore } from 'redux';

import { boardReducer } from '../pages/game/features/board/boardSlice.js';

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = createStore(rootReducer);