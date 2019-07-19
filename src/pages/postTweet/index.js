import React, { PureComponent } from 'react';
import { TweetPostWrapper } from './style';

class TweetPost extends PureComponent {
    render() {
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
                    <img src="/" alt="profile" />
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
            </TweetPostWrapper>
        );
    }
}

export default TweetPost;