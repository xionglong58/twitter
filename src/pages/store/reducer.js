import { fromJS } from "immutable";
import {actionTypes} from './index';
const defaultData = fromJS({
  clickState: false,
  mouseEnterOrMouseLeave:false,
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
        case actionTypes.HANDLE_ONMOUSEENTER:{
            console.log(action.value)
            return state.set('mouseEnterOrMouseLeave',action.value)
        }
        case actionTypes.HANDLE_ONMOUSELEAVE:{
            console.log(action.value)
            return state.set('mouseEnterOrMouseLeave',action.value)
        }     
        default:{
            return state;
        }
    }
};
