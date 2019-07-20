import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { TrendWrapper, TrendItem } from "../style";
import { actionCreators } from '../../store';
class TrendList extends PureComponent {
    componentDidMount() {
        this.props.HandleTrendsList();
    }
    render() {
        const { trendList ,handleShowMore} = this.props;
        return <Fragment>
            <TrendWrapper>
                {trendList.map((item =>
                    <TrendItem key={item.get("topicName")}>
                        <div className="trendLoction">
                            <span>{item.get("topicLocation")}</span>
                        </div>
                        <div className="trendContent">
                            <span>{item.get("topicName")}</span>
                        </div>
                        <div className="tweetNumber">
                            <span>{item.get("tweetsNumber") + " Tweets"}</span>
                        </div>
                    </TrendItem>
                ))}
                <div className="show-more" onClick={handleShowMore}>
                    Show more
                </div>
            </TrendWrapper>
        </Fragment>
    }
}
const mapStateToProps = state => {
    return {
        trendList: state.getIn(["header", "trendList"])
    };
};
const mapStateToDispatch = dispatch => {
    return {
        HandleTrendsList() {
            dispatch(actionCreators.getTrendListAction())
        },
        handleShowMore(){
            dispatch(actionCreators.getTrendShowMoreAction())
        }
    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(TrendList);
