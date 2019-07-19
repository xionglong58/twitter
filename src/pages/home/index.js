import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  HomepageWrapper,
  HomepageHeader,
  SearchBar,
  WhatIsHappen,
  HomepageLeft,
  TweetPost
} from "./style";
class HomePage extends PureComponent {
  clickHeaderToPost() {
    return (
      <TweetPost>
        <div className="postHeader">
          <div className="close">
            <span onClick={this.props.handleClickClose} className="iconfont">
              &#xe644;
            </span>
          </div>
          <div className="post">Tweet</div>
        </div>
      </TweetPost>
    );
  }
  render() {
    const { clickStatus, handleClick } = this.props;
    return (
      <HomepageWrapper>
        <HomepageLeft>
          <HomepageHeader>Home</HomepageHeader>
          <WhatIsHappen>
            <div className="profile" onClick={handleClick}>
              <img src="#" alt="" />
            </div>
            <div className="tweets" onClick={handleClick}>
              What's is happening?
            </div>
            <span className="iconfont" onClick={handleClick}>
              &#xe692;
            </span>
            <span className="iconfont" onClick={handleClick}>
              &#xe64d;
            </span>
            <span className="iconfont" onClick={handleClick}>
              &#xe615;
            </span>
            {clickStatus && this.clickHeaderToPost()}
          </WhatIsHappen>
        </HomepageLeft>
        <SearchBar>
          <input placeholder="Search Twitter" className="SearchTwitter" />
        </SearchBar>
      </HomepageWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    clickStatus: state.getIn(["header", "clickState"])
  };
};
const mapStateToDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(actionCreators.getClickAction());
    },
    handleClickClose() {
      dispatch(actionCreators.getClickCloseAction());
    }
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HomePage);
