import axios from 'axios';
import Mock from 'mockjs';
import {userInfo} from '../../mock/index';
import {actionTypes} from './index';
import {fromJS} from 'immutable';

const userInfoAction=(value)=>{
    return {
        type:actionTypes.GET_USER_INFO,
        value:fromJS(value)
    }
}
export const getUserInfo = () => {
    return (dispatch) => {
        Mock.mock("/api/twitter/userInfo", userInfo); 
        axios.get("/api/twitter/userInfo").then((res) => {
            dispatch(userInfoAction(res.data.userInfo))
        })
    }
}