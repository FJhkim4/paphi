import { combineReducers } from 'redux';
import RushReducer from './reducer_rush';
import HistoryReducer from './reducer_history';
import ChaptersReducer from './reducer_chapters';

const rootReducer = combineReducers({
  rush: RushReducer,
  history: HistoryReducer,
  chapters: ChaptersReducer
});

export default rootReducer;
