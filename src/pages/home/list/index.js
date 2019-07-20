import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { ListItemWrapper } from "../style";
import { actionCreators } from '../../store';
class ListItem extends PureComponent {
    componentDidMount() {
        this.props.HandleTweetsList();
    }
    render() {
        const { tweetsList } = this.props;
        return <Fragment>
            {
                tweetsList.map((item) => (
                    <ListItemWrapper>
                        <div className="profile">
                            <img src={item.get("imgUrl")} alt="profile" />
                        </div>
                        <div className="content">
                            <div className="user-info">
                                <span className="userName">{item.get("userName")}</span>
                                <span className="userId">{item.get("userId")}</span>
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
                    </ListItemWrapper>
                ))
            }
        </Fragment>

        // <ListItemWrapper>
        //     <div className="profile">
        //         <img src={profile.get("imgUrl")} alt="profile" />
        //     </div>
        //     <div className="content">
        //         <div className="user-info">
        //             <span className="userName">{profile.get("userName")}</span>
        //             <span className="userId">{profile.get("userId")}</span>
        //             <span className="time"> · {profile.get("time")}h</span>
        //         </div>
        //         <div className="pic-video">
        //             <img src="" alt="" />
        //             <video src=""></video>
        //         </div>
        //     </div>
        // </ListItemWrapper>
    }
}
const mapStateToProps = state => {
    return {
        clickStatus: state.getIn(["header", "clickState"]),
        profile: state.getIn(["navigator", "profile"]),
        tweetsList: state.getIn(["header", "tweetsList"])
    };
};
const mapStateToDispatch = dispatch => {
    return {
        HandleTweetsList() {
            dispatch(actionCreators.getTweetsListAction())
        }
    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(ListItem);
