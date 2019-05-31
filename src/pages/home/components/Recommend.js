import React from "react"
import { RecommendWrapper, RecommendItem } from "./../style"
import { connect } from "react-redux"
class Recommend extends React.PureComponent {
    render() {
        return (

            <RecommendWrapper>
                {
            this.props.list.map((item) => {
                return (
                    <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                )
            })
            }
                    

                </RecommendWrapper>

        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(["home", "recommendList"])
})

export default connect(mapStateToProps, null)(Recommend);