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
  addTop?: number | string;
  addBottom?: number | string;
  addMarginTop?: number | string;
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
  vector,
}: AddType) => {
  const addStyle = useMemo(() => {
    return {
      ...getStyleValue("height", addHeight),
      ...getStyleValue("top", addTop),
      ...getStyleValue("bottom", addBottom),
      ...getStyleValue("marginTop", addMarginTop),
    };
  }, [addHeight, addTop, addBottom, addMarginTop]);

  return <View style={[styles.iconAdd, addStyle]}>{vector}</View>;
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
});

export default Add;
