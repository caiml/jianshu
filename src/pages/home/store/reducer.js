import { fromJS } from "immutable"; //这个方法帮助我们把一个js对象转化成为一个immutable对象
import * as constants from "./constants"

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    ariticlePage: 1,
    showScroll: false,
    writeList: []

});
//reducer导出的内容是一个纯函数
export default (state = defaultState, action) => {
    switch (action.type) {
    case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
        });
    case constants.ADD_ARTICLE_LIST:
        return state.merge({
            "articleList": state.get("articleList").concat(action.list),
            "ariticlePage": action.nextPage
        });
    case constants.TOGGLE_SCROLL_TOP:
        return state.set("showScroll", action.show);
    case constants.CHANGE_WRITER_DATA:
        return state.set("writeList", action.writeList)


    default:
        return state;
    }
}