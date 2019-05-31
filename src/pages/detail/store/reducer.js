import { fromJS } from "immutable"; //这个方法帮助我们把一个js对象转化成为一个immutable对象
import * as constants from "./constants"

const defaultState = fromJS({
    title: '',
    content: ''
});

//reducer导出的内容是一个纯函数
export default (state = defaultState, action) => {
    switch (action.type) {
    case constants.CHANGE_DETAIL:
        return state.merge({
            title: action.title,
            content: action.content
        })


    default:
        return state;
    }
}