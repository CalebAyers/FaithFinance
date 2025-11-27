import * as React from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Height, Width } from "../GlobalStyles";

export type ReturnType = {
  returnIcon?: React.ReactNode;

  /** Variant props */
  state?: "Default" | "Active";
};

const Return = ({ state = "Default", returnIcon }: ReturnType) => {
  return <View style={styles.root}>{returnIcon}</View>;
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_32,
    width: Width.width_32,
    overflow: "hidden",
  },
});

export default Return;
