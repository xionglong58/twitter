import {combineReducers} from "redux-immutable";
import {reducer as NavigatorReducer} from '../common/store';


const reducer=combineReducers({
    navigator:NavigatorReducer
})

export default reducer;