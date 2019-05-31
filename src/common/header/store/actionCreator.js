import * as constants from "./constants";
import axios from 'axios'
import { fromJS } from "immutable"

//返回一个对象，就是下面那个函数要改变store里的值所需要创建的action，不用被暴露出去
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)

});
//本文件帮助我们创建action出去,返回的是一个对象
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page //将新页面传递给store,也是给reducer
});


//返回的是一个函数
export const getList = () => {
    return (dispatch) => {
        //在这个函数里写异步的请求
        axios.get("/api/headerList.json").then((res) => {
            const data = res.data;

            const action = changeList(data.data);
            dispatch(action);

        }).catch(() => {
            console.log("error");
        })

    }
}