import {fromJS} from "immutable";
const defaultDate=fromJS({
    click:true
})
export default (state=defaultDate,action)=>{
    return state;
}