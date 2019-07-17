import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { NavWrapper } from './style';

class Navigator extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <NavWrapper>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256, height: '100vh', fontSize: 20 }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <div><span className="iconfont">&#xe601;</span></div>
                    <Menu.Item key="1">
                        <div><span className="iconfont">&#xe66b;</span>
                            Home</div>
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
                        <div><span className="iconfont">&#xe60a;</span>
                            Profile</div>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <div><span className="iconfont">&#xe607;</span>
                            More</div>
                    </Menu.Item>
                </Menu>
            </NavWrapper>
        );
    }
}

export default Navigator;