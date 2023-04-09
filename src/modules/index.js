//루트 리듀서 -> createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 하기 때문에
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
