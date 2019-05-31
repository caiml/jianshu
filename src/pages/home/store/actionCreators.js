import axios from "axios"
import * as constants from "./constants"
import { fromJS } from "immutable"
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const result = res.data.data; //此时可以在此处得到数据
            //接下来你又创建了一个action,并将其派发出去
            const action = changeHomeData(result);
            dispatch(action);
        });
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {

        axios.get("/api/homeList.json?page=" + page).then((res) => {

            const result = res.data.data; //此时可以在此处得到数据
            //接下来你又创建了一个action,并将其派发出去改变store里面的内容
            const action = addHomeList(result, page + 1);
            dispatch(action); //这个action是为了将ajax数据存储到store里面的action
        });
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})

export const getWriter = () => {
    return (dispatch) => {
        axios.get("/api/write.json").then((res) => {
            const result = res.data.data;
            const action = changeWriterData(result); //此时的action是一个对象
            dispatch(action);

        })
    }
}

const changeWriterData = (result) => ({
    type: constants.CHANGE_WRITER_DATA,
    "writeList": fromJS(result)
})



const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})