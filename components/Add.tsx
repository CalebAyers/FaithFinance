import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { BoxShadow } from "../GlobalStyles";

export type AddType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  addHeight?: number | string;
  addWidth?: number | string;
  addTop?: number | string;
  addBottom?: number | string;
  addLeft?: number | string;
  addMarginTop?: number | string;
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
  addWidth,
  addTop,
  addBottom,
  addLeft,
  addMarginTop,
  vector,
  vectorIconWidth,
  vectorIconRight,
  vectorIconLeft,
}: AddType) => {
  const addStyle = useMemo(() => {
    return {
      ...getStyleValue("height", addHeight),
      ...getStyleValue("width", addWidth),
      ...getStyleValue("top", addTop),
      ...getStyleValue("bottom", addBottom),
      ...getStyleValue("left", addLeft),
      ...getStyleValue("marginTop", addMarginTop),
    };
  }, [addHeight, addWidth, addTop, addBottom, addLeft, addMarginTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("right", vectorIconRight),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [vectorIconWidth, vectorIconRight, vectorIconLeft]);

  return <View style={[styles.iconAdd, addStyle]}>{vector}</View>;
};

const styles = StyleSheet.create({
  iconAdd: {
    height: "52%",
    width: "7.21%",
    top: "24%",
    right: "69.72%",
    bottom: "24%",
    left: "23.07%",
    boxShadow: BoxShadow.shadow_inner,
    elevation: 4,
    position: "absolute",
  },
});

export default Add;
