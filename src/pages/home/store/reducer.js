import { fromJS } from "immutable";
import {actionTypes} from './index';
const defaultData = fromJS({
  clickState: false
});

export default (state = defaultData, action) => {
    switch(action.type){
        case actionTypes.HEADERCLICK:{
            return state.set('clickState',action.value)
        }
        default:{
            return state;
        }
    }
};
