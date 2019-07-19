import React from "react";
import { GlobalIconfontStyle } from "./static/iconfont";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { FlexWrapper } from "./style";
import TweetPost from './pages/postTweet/index';
import HomePage from './pages/home/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalIconfontStyle />
        <FlexWrapper>
          <Route path="/twitter/home" exact component={HomePage} />
          <Route path="/twitter/home/tweet" exact component={TweetPost} />
          <Route path="/twitter/tweet" exact component={TweetPost} />
          {/* <TweetPost /> */}
        </FlexWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
