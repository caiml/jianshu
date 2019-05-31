import axios from "axios"
import * as constants from "./constants"

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const login = (account, password) => {
    return (dispatch) => { //给后端同学带几个参数
        axios.get("/api/login.json?account=" + account + "&password=" + password).then((res) => {
            const result = res.data.data;
            if (result) {
                //如果请求成功，要将store里面login的false改为true
                dispatch(changeLogin());

            } else {
                alert("登录失败")
            }


        })

    }
}

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})