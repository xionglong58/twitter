import { fromJS } from "immutable";
import {actionTypes} from './index';
const defaultData = fromJS({
  clickState: false,
  tweetsList:[]
});

export default (state = defaultData, action) => {
    switch(action.type){
        case actionTypes.HEADERCLICK:{
            return state.set('clickState',action.value)
        }
        case actionTypes.HEADERCLOSE:{
            return state.set('clickState',action.value)
        }
        case actionTypes.HANDLEHOMETWEETSLIST:{
            return state.set('tweetsList',action.value)
        }
        default:{
            return state;
        }
    }
};
