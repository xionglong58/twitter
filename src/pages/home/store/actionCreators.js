import {actionTypes} from './index';
export const getClickAction=()=>{
    return {
        type:actionTypes.HEADERCLICK,
        value:true
    }
}