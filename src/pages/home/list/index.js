import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ListItemWrapper } from "../style";
class ListItem extends PureComponent {
    render() {
        const { profile } = this.props;
        return (
            <ListItemWrapper>
                <div className="profile">
                    <img src={profile.get("imgUrl")} alt="profile" />
                </div>
                <div className="content">
                    <div className="user-info">
                    <span className="userName">{profile.get("userName")}</span>
                    <span className="userId">{profile.get("userId")}</span>
                    <span className="time"> · {profile.get("time")}h</span>              
                        
                    </div>
                    <div className="pic-video">
                        <img src="" alt="" />
                        <video src=""></video>
                    </div>
                </div>
            </ListItemWrapper>
        );
    }
}
const mapStateToProps = state => {
    return {
        clickStatus: state.getIn(["header", "clickState"]),
        profile: state.getIn(["navigator", "profile"])
    };
};
const mapStateToDispatch = dispatch => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(ListItem);
