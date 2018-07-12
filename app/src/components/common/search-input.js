import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import { sizeFont, sizeHeight, sizeWidth } from "../../helpers/size.helper";

const EMPTY_STRING = "";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: EMPTY_STRING
    };
  }

  searchCommand = () => {
    const { onSearch } = this.props;
    onSearch(this.state.keyword);
  };

  clearText = () => {
    const { onSearch } = this.props;
    this.setState({
      keyword: EMPTY_STRING
    });
    onSearch(EMPTY_STRING);
  };

  render() {
    const {
      placeholder,
      onSearchFocus,
      style,
      onIconClick,
      searchWhenTextChange,
      onSearch,
      placeholderTextColor,
      inputStyle
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={onIconClick}>
          <Image
            resizeMode={"contain"}
            style={styles.icon}
            source={require("../../../res/img/ic_left_arrow.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={[styles.textInput, inputStyle]}
          value={this.state.keyword}
          underlineColorAndroid="transparent"
          onFocus={onSearchFocus}
          placeholder={placeholder || "Search..."}
          onChangeText={text => {
            searchWhenTextChange && onSearch(text);
            this.setState({ keyword: text });
          }}
          placeholderTextColor={placeholderTextColor || "black"}
          ref={input => (this.input = input)}
          onSubmitEditing={this.searchCommand}
          returnKeyType="search"
        />
        {this.renderClearText()}
      </View>
    );
  }

  focus = () => {
    this.input.focus();
  };

  renderClearText = () => {
    const { hasClearText } = this.props;
    if (hasClearText) {
      return (
        <TouchableOpacity onPress={this.clearText}>
          <Image
            style={styles.clearText}
            resizeMode={"contain"}
            source={require("../../../res/img/ic_cancel_black.png")}
          />
        </TouchableOpacity>
      );
    }
  };
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  onSearchFocus: PropTypes.func,
  onIconClick: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    height: sizeWidth(13.33),
    alignItems: "center",
    marginHorizontal: sizeWidth(2),
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: sizeWidth(6.665)
  },
  textInput: {
    height: sizeHeight(7),
    fontSize: sizeFont(4),
    flex: 1,
    alignItems: "center"
  },
  icon: {
    width: sizeWidth(5.6),
    marginRight: sizeWidth(3),
    marginLeft: sizeWidth(6),
    height: sizeWidth(4)
  },
  clearText: {
    width: sizeWidth(3),
    height: sizeWidth(3),
    marginRight: sizeWidth(5)
  }
});
