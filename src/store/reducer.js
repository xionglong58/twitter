import {combineReducers} from "redux-immutable";
import {reducer as NavigatorReducer} from '../common/store';
import {reducer as HeaderReducer} from '../pages/store';


const reducer=combineReducers({
    navigator:NavigatorReducer,
    header:HeaderReducer,
})

export default reducer;