import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  Color,
  Height,
  Width,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type HomeType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  home2Height?: number | string;
  home2Position?: string;
  home2Top?: number | string;
  home2Right?: number | string;
  home2Bottom?: number | string;
  home2Left?: number | string;
  homeColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Home = ({
  state = "default",
  home2Height,
  home2Position,
  home2Top,
  home2Right,
  home2Bottom,
  home2Left,
  vector,
  homeColor,
}: HomeType) => {
  const home2Style = useMemo(() => {
    return {
      ...getStyleValue("height", home2Height),
      ...getStyleValue("position", home2Position),
      ...getStyleValue("top", home2Top),
      ...getStyleValue("right", home2Right),
      ...getStyleValue("bottom", home2Bottom),
      ...getStyleValue("left", home2Left),
    };
  }, [
    home2Height,
    home2Position,
    home2Top,
    home2Right,
    home2Bottom,
    home2Left,
  ]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", homeColor),
    };
  }, [homeColor]);

  return (
    <View style={[styles.iconHome2, home2Style]}>
      {vector}
      <Text style={[styles.home, styles.homeClr, homeStyle]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeClr: {
    color: Color.backgroundColorLightMode,
    position: "absolute",
  },
  iconHome2: {
    height: Height.height_32,
    width: Width.width_32,
  },
  home: {
    top: 34,
    left: -9,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
