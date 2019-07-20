import { fromJS } from "immutable";
import {actionTypes} from './index';
const defaultData = fromJS({
  clickState: false,
  mouseEnterOrMouseLeave:false,
  tweetsList:[],
  trendList:[]
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
            return state.set('mouseEnterOrMouseLeave',action.value)
        }
        case actionTypes.HANDLE_ONMOUSELEAVE:{
            return state.set('mouseEnterOrMouseLeave',action.value)
        }
        case actionTypes.HANDLE_TREND_LIST:{
            return state.set('trendList',action.value)
        }
        case actionTypes.HANDLE_MORE_TREND_LIST:{
            console.log("action.value")
            return state.set('trendList',state.get("trendList").concat(action.value))
        }           
        default:{
            return state;
        }
    }
};
