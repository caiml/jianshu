import { combineReducers } from "redux-immutable"
//import headerReducer from "./../common/header/store/reducer"
import { reducer as headerReducer } from "./../common/header/store"
import { reducer as homeReducer } from "./../pages/home/store/"
import { reducer as detailReducer } from "./../pages/detail/store/"
import { reducer as loginReducer } from "./../pages/login/store/"
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
}) //此时生成的数据内容是immutable的数据内容

export default reducer;