import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Navigator from '../../common/index';
import ListItemWrapper from './list';
import { Redirect } from 'react-router-dom';
import TrendList from './trendList/index';
import {
  HomepageWrapper,
  HomepageHeader,
  SearchBar,
  WhatIsHappen,
  HomepageLeft,
  HomepageRight
} from "./style";
class HomePage extends PureComponent {
  render() {
    const { handleClick, profile, clickStatus } = this.props;
    return (
      <HomepageWrapper>
        <Navigator />
        <HomepageLeft>
          <HomepageHeader>Home</HomepageHeader>
          <WhatIsHappen onClick={handleClick}>
            <div className="profile">
              <img src={profile.get("imgUrl")} alt="profile" />
            </div>
            <div className="tweets">
              What's is happening?
            </div>
            <span className="iconfont" >
              &#xe692;
            </span>
            <span className="iconfont" >
              &#xe64d;
            </span>
            <span className="iconfont">
              &#xe615;
            </span>
            {clickStatus && <Redirect to="/twitter/home/tweet" />}
          </WhatIsHappen>
          <ListItemWrapper />
        </HomepageLeft>
        <SearchBar>
          <input placeholder="Search Twitter" className="SearchTwitter" />
        </SearchBar>
        <HomepageRight>
          <div className="header">
            <span>Trends for you</span>
          </div>
          <TrendList />
        </HomepageRight>
      </HomepageWrapper>
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
