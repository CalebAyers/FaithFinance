import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Vector6 from "../assets/Vector6.svg";
import { BoxShadow, Color } from "../GlobalStyles";

export type AddType = {
  /** Variant props */
  state?: string;

  /** Style props */
  addHeight?: number | string;
  addTop?: number | string;
  addBottom?: number | string;
  addMarginTop?: number | string;
  addWidth?: number | string;
  addLeft?: number | string;
  vectorIconWidth?: number | string;
  vectorIconRight?: number | string;
  vectorIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Add = ({
  state = "default",
  addHeight,
  addTop,
  addBottom,
  addMarginTop,
  addWidth,
  addLeft,
  vectorIconWidth,
  vectorIconRight,
  vectorIconLeft,
}: AddType) => {
  const addStyle = useMemo(() => {
    return {
      ...getStyleValue("height", addHeight),
      ...getStyleValue("top", addTop),
      ...getStyleValue("bottom", addBottom),
      ...getStyleValue("marginTop", addMarginTop),
      ...getStyleValue("width", addWidth),
      ...getStyleValue("left", addLeft),
    };
  }, [addHeight, addTop, addBottom, addMarginTop, addWidth, addLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("right", vectorIconRight),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [vectorIconWidth, vectorIconRight, vectorIconLeft]);

  return (
    <View style={[styles.iconAdd, addStyle]}>
      <Vector6 style={[styles.vectorIcon, vectorIconStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconAdd: {
    height: "52%",
    width: "7.22%",
    top: "24%",
    right: "69.72%",
    bottom: "24%",
    left: "23.06%",
    boxShadow: BoxShadow.shadow_inner,
    elevation: 4,
    zIndex: 1,
    position: "absolute",
  },
  vectorIcon: {
    height: "58.46%",
    width: "58.46%",
    top: "20.77%",
    right: "20.77%",
    bottom: "20.77%",
    left: "20.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.backgroundColorLightMode,
    position: "absolute",
  },
});

export default Add;
