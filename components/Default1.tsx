import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Profile from "./Profile";
import Vector7 from "../assets/Vector7.svg";
import {
  Width,
  Height,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type Default1Type = {
  state?: string;
  profilePosition?: string;
  profileTop?: string;
  profileLeft?: string;
  profileHeight?: string;
  profileRight?: string;
  profileBottom?: string;
  profileColor?: string;

  /** Style props */
  defaultMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Default1 = ({
  defaultMarginTop,
  state,
  profilePosition,
  profileTop,
  profileLeft,
  profileHeight,
  profileRight,
  profileBottom,
  profileColor,
}: Default1Type) => {
  const defaultStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", defaultMarginTop),
    };
  }, [defaultMarginTop]);

  return (
    <View style={[styles.headerBarDefault, defaultStyle]}>
      <Text style={styles.faithfinance}>FaithFinance</Text>
      <Profile
        state={state}
        profilePosition={profilePosition}
        profileTop={profileTop}
        profileLeft={profileLeft}
        profileHeight={profileHeight}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profileColor={profileColor}
        vector={<Vector7 width={83} height={83} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarDefault: {
    marginLeft: -3,
    width: Width.width_400,
    height: Height.height_90,
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
    marginTop: -1200,
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

export default Default1;
