import {actionTypes} from './index';
export const getClickAction=()=>{
    return {
        type:actionTypes.HEADERCLICK,
        value:true
    }
}

export const getClickCloseAction=()=>{
    return {
        type:actionTypes.HEADERCLOSE,
        value:false
    }
}