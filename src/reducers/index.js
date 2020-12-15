import { combineReducers } from 'redux';
import postsReducers from './postsReducers'

export default combineReducers({
  //replaceMe: () => 'hi there'
  posts: postsReducers 
});
