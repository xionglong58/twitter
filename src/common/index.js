import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { NavWrapper } from './style';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { actionCreators } from './store';

class Navigator extends React.Component {
    componentDidMount() {
        this.props.HandleUserInfo();
    }
    render() {
        const { profile } = this.props;
        return (
            <NavWrapper>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, height: '100vh', fontSize: 20 }}
                    mode="inline"
                >
                    <div className="twitterIcon"><span className="iconfont">&#xe601;</span></div>
                    <Menu.Item key="1">
                        <Link to="/twitter/home"><div><span className="iconfont">&#xe66b;</span>
                            Home</div></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <div><span className="iconfont">&#xe643;</span>
                            Explore</div>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <div><span className="iconfont">&#xe7ca;</span>
                            Notification</div>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <div><span className="iconfont">&#xe61c;</span>
                            Message</div>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <div><span className="iconfont">&#xe75f;</span>
                            Bookmarks</div>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <div><span className="iconfont">&#xe74c;</span>
                            Lists</div>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <div><img src={profile.get("imgUrl")} alt="profile" className="profile"/>Profile</div>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <div><span className="iconfont">&#xe607;</span>
                            More</div>
                    </Menu.Item>
                    <Link to="/twitter/tweet"><div className="tweet">Tweet</div></Link>
                </Menu>
            </NavWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.getIn(["navigator", "profile"])
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        HandleUserInfo() {
            dispatch(actionCreators.getUserInfo())
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Navigator);