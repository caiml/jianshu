import React from "react"
import { WriterWrapper, Write_top, WriteList, Writeitem, Write_bottom } from "../style"
import { connect } from "react-redux"
import { actionCreators } from "./../store"
class Writer extends React.PureComponent {
    render() {
        return (
            <WriterWrapper>
            	<Write_top>
            		<span>推荐作者</span>
            		<a href="#">换一批</a>
            	</Write_top>
            	<WriteList>
            		{
            this.props.list.map((item) => {
                return (
                    <Writeitem key={item.get("id")}>
            		
		<		img className = "writePic" src ={item.get("imgUrl")}  / >
            			<a className="title" href="#">{item.get("title")}</a>
            			<p className="desc">{item.get("desc")}</p>
            		</Writeitem>

                );
            })

            }
            
            		<Write_bottom>查看全部</Write_bottom>
            		
            	</WriteList>
            </WriterWrapper>
        )
    }
    componentDidMount() {
        this.props.getWriter();
    }
}



const mapStateToProps = (state) => ({
    list: state.getIn(["home", "writeList"])

});

const mapDispatchToProps = (dispatch) => ({


    getWriter() {
        dispatch(actionCreators.getWriter()); //此时的action是一个函数，在actionCreactor里完成异步的操作
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Writer);