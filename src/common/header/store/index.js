import reducer from "./reducer"
import * as actionCreators from "./actionCreator"
import * as constants from "./constants";
export { reducer, actionCreators, constants }

//将其当做header下store的出口文件，让其他文件间接引用reducer,这样的好处是可以使引入时要写的东西减少