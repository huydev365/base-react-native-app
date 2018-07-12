import React, { Component, ReactNode } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { sizeWidth } from "../../helpers/size.helper";

export default class Input extends Component {
  render(): ReactNode {
    const {
      style,
      placeholder,
      value,
      onChangeText,
      secureTextEntry
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          placeholderTextColor="rgb(107, 112, 115)"
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(75),
    flexDirection: "row",
    height: sizeWidth(10.06),
    backgroundColor: "rgb(38, 46, 48)",
    alignItems: "center",
    paddingHorizontal: sizeWidth(2.13)
  },
  input: {
    fontSize: sizeWidth(2.86),
    flex: 1,
    fontWeight: "bold",
    textAlign: "left",
    color: "rgb(107, 112, 115)",
    height: sizeWidth(10.06)
  }
});
