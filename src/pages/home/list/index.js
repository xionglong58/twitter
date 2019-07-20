import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { ListItemWrapper, ListItemInfo } from "../style";
import { actionCreators } from '../../store';
class ListItem extends PureComponent {
    componentDidMount() {
        this.props.HandleTweetsList();
    }
    render() {
        const { tweetsList, handleMouseEnter, handleMouseLeave } = this.props;
        return <Fragment>
            {
                tweetsList.map((item) => (
                    <ListItemWrapper key={item.get("userName")}>
                        <div className="profile">
                            <img src={item.get("imgUrl")} alt="profile"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                        <div className="content">
                            <div className="user-info">
                                <span className="userName"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.get("userName")}</span>
                                <span className="userId"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >{item.get("userId")}</span>
                                <span className="time"> · {item.get("time")}h</span>
                            </div>
                            <div className="text">
                                <p>{item.get("tweetsText")}</p>
                            </div>
                            <div className="img">
                                <img src={item.get("tweetsImgUrl")} alt="tweetsImgUrl" />
                            </div>
                            {
                                item.get("videoUrl") &&
                                <div className="pic-video">
                                    <img src="" alt="" />
                                    <video src=""></video>
                                </div>
                            }
                        </div>
                        <ListItemInfo>
                            <div className="profile">
                                <img src={item.get("imgUrl")} alt="profile" />
                            </div>
                            <div className="content">
                                <div className="user-info">
                                    <span className="userName">
                                        {item.get("userName")}</span>
                                    <span className="userId">@{item.get("userId")}</span>
                                </div>
                                <div className="text">
                                    <p>{item.get("userSlogan")}</p>
                                </div>
                                <div className="followeInfo">
                                    <span>{item.get("following")}Following</span>
                                    <span>{item.get("follower")}K Follower</span>
                                </div>
                            </div>
                        </ListItemInfo>
                    </ListItemWrapper>
                ))
            }
        </Fragment>
    }
}
const mapStateToProps = state => {
    return {
        tweetsList: state.getIn(["header", "tweetsList"])
    };
};
const mapStateToDispatch = dispatch => {
    return {
        HandleTweetsList() {
            dispatch(actionCreators.getTweetsListAction())
        },
        handleMouseEnter() {
            dispatch(actionCreators.getMouseEnterAction())
        },
        handleMouseLeave() {
            dispatch(actionCreators.getMouseLeaveAction())
        }

    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(ListItem);
