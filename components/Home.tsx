import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, LineHeight, FontFamily, Color } from "../GlobalStyles";

export type HomeType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  activePosition?: string;
  activeHeight?: number | string;
  activeTop?: number | string;
  activeRight?: number | string;
  activeBottom?: number | string;
  activeLeft?: number | string;
  homeColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Home = ({
  state = "default",
  activePosition,
  activeHeight,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
  homeColor,
  vector,
}: HomeType) => {
  const activeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", activePosition),
      ...getStyleValue("height", activeHeight),
      ...getStyleValue("top", activeTop),
      ...getStyleValue("right", activeRight),
      ...getStyleValue("bottom", activeBottom),
      ...getStyleValue("left", activeLeft),
    };
  }, [
    activePosition,
    activeHeight,
    activeTop,
    activeRight,
    activeBottom,
    activeLeft,
  ]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  return (
    <View style={[styles.active, activeStyle]}>
      {vector}
      <Text style={[styles.home, homeStyle]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  home: {
    top: 34,
    left: -9,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    color: Color.goldButton,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default Home;
