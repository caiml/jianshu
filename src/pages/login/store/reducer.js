import { fromJS } from "immutable"; //这个方法帮助我们把一个js对象转化成为一个immutable对象
import * as constants from "./constants"

const defaultState = fromJS({
    login: false

});

//reducer导出的内容是一个纯函数
export default (state = defaultState, action) => {
    switch (action.type) {
    case constants.CHANGE_LOGIN:
        return state.set("login", action.value);
    case constants.LOGOUT:
        return state.set("login", action.value);



    default:
        return state;
    }
}