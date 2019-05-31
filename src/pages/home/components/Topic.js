import React from "react"
import { TopicWrapper, TopicItem } from "./../style"
//目前Topic组件有使用store的能力，因为在provider里面，但如果想真正的使用store，需要连接 connect
import { connect } from "react-redux"
class Topic extends React.PureComponent {
    render() {
        return (
            <TopicWrapper>
                {this.props.list.map((item) => {
                return (
                    <TopicItem key={item.get("id")}>
<img className="topic-pic" src={item.get("imgUrl")} />
                {item.get("title")}
            </TopicItem>
                )
            })}
           
            </TopicWrapper>
        )
    }
}


//这个函数返回的结果一定是一个对象，可以用()来弄
const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("topicList")
    }


};



export default connect(mapStateToProps, null)(Topic);