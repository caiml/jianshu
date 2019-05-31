import React from "react"
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from "./style"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { actionCreators as loginActionCreators } from "../../pages/login/store"
import { Link } from "react-router-dom"
class Header extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    // handleInputFocus = () => {
    //     this.setState({
    //         focused: true
    //     })
    // }

    // handleInputBlur = () => {
    //     this.setState({
    //         focused: false
    //     })
    // }
    //写一个展示搜索列表的函数
    getListArea = () => {
        const pageList = [];
        const newList = this.props.list.toJS(); //将immutable对象转化成一个普通的js数组
        if (newList.length) {
            for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (this.props.focused || this.props.mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave} >
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch onClick={() => {
                    this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)
                }}>
                <i ref={(icon) => {
                    this.spinIcon = icon
                }}className="iconfont spin"></i>
                换一批
                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {pageList}
                            </SearchInfoList>
                            
                </SearchInfo>

            )

        } else {
            return null;
        }

    }


    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                <Logo />
                </Link>
                <Nav>
                    <Link to="/">
                    <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载APP</NavItem>
                    {
            this.props.login ? <NavItem onClick={this.props.logout} className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }
                    
                    <NavItem className="right">
                        <i className="iconfont"></i>
                    </NavItem>
                    <SearchWrapper >
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                        <NavSearch
            className={this.props.focused ? "focused" : ""}
            onFocus={this.props.handleInputFocus}
            onBlur={this.props.handleInputBlur}
            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? "focused iconfont zoom" : "iconfont zoom"}></i>
                       {this.getListArea()}
                    </SearchWrapper>
                    <Addtion>
                        <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont"></i>
                            写文章
                        </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addtion>

                </Nav>
            </HeaderWrapper>
        )
    }
}
//state里的数据如何映射到props下面,这里state.focused指的是仓库里的focused,映射到组件的props里去,映射名叫focused
//这里从tore里面去引入数据
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        login: state.getIn(["login", "login"])
    }


}
//写在里面的方法有能力调用store.dispatch,dispatch指的是store里的dispatch方法
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            //要改变store里面的数据，首先创建action
            const action = actionCreators.searchFocus();
            //然后dispatch,将其发给store
            dispatch(action);
            //异步获取数据
            dispatch(actionCreators.getList());
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur();
            //然后dispatch,将其发给store
            dispatch(action);
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originalAngle = spin.style.transform.replace(/[^0-9]/ig, "");
            if (originalAngle) {
                originalAngle = parseInt(originalAngle, 10);
            } else {
                originalAngle = 0;
            }
            spin.style.transform = "rotate(" + (originalAngle + 360) + "deg)";

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }

        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}



export default connect(mapStateToProps, mapDispathToProps)(Header);