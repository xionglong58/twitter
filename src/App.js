import React from "react";
import Navigator from "./common/index";
import { GlobalIconfontStyle } from "./static/iconfont";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import HomePage from "./pages/home";
import { FlexWrapper } from "./style";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalIconfontStyle />
        <FlexWrapper>
          <Navigator />
          <HomePage />
          {/* <Route path="/twitter" exact component={Navigator} /> */}
        </FlexWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
