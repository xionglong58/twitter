import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {actionCreators} from "./store";
import {
  HomepageWrapper,
  HomepageHeader,
  SearchBar,
  WhatIsHappen,
  HomepageLeft,
  TweetPost
} from "./style";
class HomePage extends PureComponent {
  render() {
    const { clickStatus, handleClick } = this.props;
    return (
      <HomepageWrapper>
        <HomepageLeft>
          <HomepageHeader>Home</HomepageHeader>
          <WhatIsHappen onClick={handleClick}>
            <div className="profile">
              <img src="#" />
            </div>
            <div className="tweets">What's is happening?</div>
            <span className="iconfont">&#xe692;</span>
            <span className="iconfont">&#xe64d;</span>
            <span className="iconfont">&#xe615;</span>
            {clickStatus&&<TweetPost/>}
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(HomePage);
