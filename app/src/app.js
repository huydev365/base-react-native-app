import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import { navReducer, initialState } from "./reducers/nav.reducer";
import Main from "./main";

export default class App extends React.Component {
  render(): React.Node {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const { store } = configureStore(navReducer, { nav: initialState });
