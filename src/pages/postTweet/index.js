import React, { PureComponent } from 'react';
import { TweetPostWrapper } from './style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TweetPost extends PureComponent {
    render() {
        const { profile, clickStatus } = this.props;
        return (
            <TweetPostWrapper>
                <div className="postHeader">
                    <div className="close">
                        <span onClick={this.props.handleClickClose} className="iconfont">
                            &#xe644;
                        </span>
                    </div>
                    <div className="post">Tweet</div>
                </div>
                <div className="profile">
                    <img src={profile.get("imgUrl")} alt="profile" />
                </div>
                <textarea placeholder="What's happending?" className="input" />
                <div className="tewwt-types">
                    <span className="iconfont" >
                        &#xe692;
                    </span>
                    <span className="iconfont" >
                        &#xe64d;
                    </span>
                    <span className="iconfont">
                        &#xe615;
                    </span>
                </div>
                {!clickStatus && <Redirect to="/twitter/home" />}
            </TweetPostWrapper>
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
        handleClickClose() {
            dispatch(actionCreators.getClickCloseAction());
        }
    };
};
export default connect(
    mapStateToProps,
    mapStateToDispatch
)(TweetPost);