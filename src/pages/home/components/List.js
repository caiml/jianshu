import React from "react"
import { ListItem, ListInfo, LoadMore } from "./../style"
import { connect } from "react-redux"
import { actionCreators } from "./../store"
import { Link } from "react-router-dom"
class List extends React.PureComponent {
    render() {
        return (
            <div>
                {
            this.props.list.map((item, index) => {
                return (
                    <Link key={index} to={"./detail" + item.get("id")}>
                    <ListItem >
                <img className="pic" src={item.get("imgUrl")} />
                <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                </ListInfo>
            </ListItem>
            </Link>
                );
            })
            }
            <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
            </div>

        )
    }
}
//这个函数返回的结果一定是一个对象，所以可以用括号
const mapStateToProps = (state) => ({
    list: state.get("home").get("articleList"),
    page: state.getIn(["home", "ariticlePage"])
});

const mapDispatchToProps = (dispatch) => ({


    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page)) //派发一个同步的action
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(List);