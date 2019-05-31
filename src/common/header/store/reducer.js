import * as constants from "./constants";
import { fromJS } from "immutable"; //这个方法帮助我们把一个js对象转化成为一个immutable对象


const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
//reducer导出的内容是一个纯函数
export default (state = defaultState, action) => {
    switch (action.type) {
    case constants.SEARCH_FOCUS:
        return state.set("focused", true);
    case constants.SEARCH_BLUR:
        return state.set("focused", false);
    case constants.CHANGE_LIST:
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        });
    case constants.MOUSE_ENTER:
        return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
        return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
        return state.set("page", action.page); //set改变一个值就需要使用一个set方法，我们可以使用merge方法，它接受一个对象
    default:
        return state;
    }
}