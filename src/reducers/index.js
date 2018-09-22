import { combineReducers } from 'redux';
import RushReducer from './reducer_rush';
import HistoryReducer from './reducer_history';
import ChaptersReducer from './reducer_chapters';
import ActivesReducer from './reducer_actives';
import BrothersReducer from './reducer_brothers';

const rootReducer = combineReducers({
  rush: RushReducer,
  history: HistoryReducer,
  chapters: ChaptersReducer,
  actives: ActivesReducer,
  brothers: BrothersReducer
});

export default rootReducer;
