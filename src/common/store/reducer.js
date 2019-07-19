import { fromJS } from "immutable";
import { actionTypes } from './index';
const defaultDate = fromJS({
    click: true,
    profile: {
        imgUrl: "",
        userName: "",
        id: ""
    }
})
export default (state = defaultDate, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_INFO: {
            // console.log(action);
            return state.set('profile', action.value)
        }
        default:
            return state
    }
}