import { actionTypes } from './index';
import Mock from 'mockjs';
import { TweetsList } from '../../mock';
import axios from "axios";
import { fromJS } from 'immutable';
export const getClickAction = () => {
    return {
        type: actionTypes.HEADERCLICK,
        value: true
    }
}

export const getClickCloseAction = () => {
    return {
        type: actionTypes.HEADERCLOSE,
        value: false
    }
}

const tweetsListAction = (value) => {
    return {
        type: actionTypes.HANDLEHOMETWEETSLIST,
        value: fromJS(value)
    }
}
export const getTweetsListAction = () => {
    Mock.mock("/api/twitter/tweetsList", TweetsList);
    return (dispatch) => {
        axios.get("/api/twitter/tweetsList").then((res) => {
            dispatch(tweetsListAction(res.data.tweetsList))
        })
    }
}

export const getMouseEnterAction=()=>{
    return {
        type:actionTypes.HANDLE_ONMOUSEENTER,
        value:true
    }
}

export const getMouseLeaveAction=()=>{
    return {
        type:actionTypes.HANDLE_ONMOUSELEAVE,
        value:false
    }
}
