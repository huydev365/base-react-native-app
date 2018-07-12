import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  BackHandler
} from "react-native";
import { AppNavigator } from "./navigators/app.navigator";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

class Main extends Component {
  shouldCloseApp = () => {
    return this.props.nav.index === 0;
  };

  handleBackPress = () => {
    if (this.shouldCloseApp()) {
      return false;
    }
    this.props.dispatch(NavigationActions.back({}));
    return true;
  };

  componentDidMount = () => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar barStyle="light-content" />
        </View>
        <AppNavigator
          navigation={addNavigationHelpers({ dispatch: dispatch, state: nav })}
        />
      </View>
    );
  }
}

const statusBarHeight = Platform.OS === "ios" ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(31, 39, 43)"
  },
  statusBar: {
    height: statusBarHeight,
    backgroundColor: "rgb(31, 39, 43)"
  }
});

export default connect(
  state => ({
    nav: state.nav
  }),
  mapDispatchToProps
)(Main);
