import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Profile1 from "./Profile1";
import {
  Height,
  Width,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type DefaultType = {
  state?: string;
  profileHeight?: string;
  profileTop?: string;
  profileRight?: string;
  profileBottom?: string;
  profileLeft?: string;
  profilePosition?: string;
  profileColor?: string;

  /** Style props */
  defaultMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Default = ({
  defaultMarginLeft,
  state,
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  profileColor,
}: DefaultType) => {
  const defaultStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", defaultMarginLeft),
    };
  }, [defaultMarginLeft]);

  return (
    <View style={[styles.headerBarDefault, defaultStyle]}>
      <Text style={styles.faithfinance}>FaithFinance</Text>
      <Profile1 state="active" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarDefault: {
    marginLeft: -6,
    height: Height.height_90,
    width: Width.width_400,
    backgroundColor: Color.mainRed,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_8,
    gap: Gap.gap_10,
    zIndex: 2,
  },
  faithfinance: {
    height: Height.height_47,
    width: Width.width_375,
    fontSize: FontSize.fs_18,
    lineHeight: LineHeight.lh_38,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    textAlign: "left",
    zIndex: 0,
  },
});

export default Default;
