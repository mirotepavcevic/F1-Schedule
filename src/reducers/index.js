import { combineReducers } from "redux";
import reducers from './allReducers';

export default combineReducers({
    races : reducers,
    drivers : reducers,
    constructors: reducers
    
})

