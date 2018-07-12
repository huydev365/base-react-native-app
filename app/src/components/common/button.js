import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Text from "./text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    const { disabled, text, style, textStyle, onPress, loading } = this.props;

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, style]}
        onPress={onPress}
      >
        {loading && this.renderLoading()}
        <Text numberOfLines={1} style={[styles.text, textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  renderLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="small" color="white" />
      </View>
    );
  };
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textStyle: PropTypes.any,
  loading: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizeWidth(3),
    paddingHorizontal: sizeWidth(4),
    backgroundColor: "rgb(47, 246, 214)",
    borderRadius: sizeWidth(8.67),
    justifyContent: "center"
  },
  loading: {
    alignSelf: "center",
    position: "absolute",
    left: sizeWidth(2.13)
  },
  text: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: sizeFont(3)
  }
});
