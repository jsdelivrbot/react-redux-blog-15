import { combineReducers } from 'redux';
import ReducerPost from './reducer-post';
import ReducerActivePost from './recuder-activePost';
import {reducer as ReducerForm} from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducerPost,
  ActivePost: ReducerActivePost,
  form: ReducerForm
});

export default rootReducer;
