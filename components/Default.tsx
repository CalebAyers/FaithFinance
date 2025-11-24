import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Profile from "./Profile";
import Vector4 from "../assets/Vector4.svg";
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

export type DefaultType = {
  state?: string;
  profileHeight?: string;
  profileTop?: string;
  profileLeft?: string;
  profileRight?: string;
  profileBottom?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default = ({
  state,
  profileHeight,
  profileTop,
  profileLeft,
  profileRight,
  profileBottom,
  profilePosition,
  profileColor,
}: DefaultType) => {
  return (
    <View style={styles.headerBarDefault}>
      <Text style={styles.faithfinance}>FaithFinance</Text>
      <Profile
        state={state}
        profileHeight={profileHeight}
        profileTop={profileTop}
        profileLeft={profileLeft}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profilePosition={profilePosition}
        vector={<Vector4 width={83} height={83} />}
        profileColor={profileColor}
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
    zIndex: 1,
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
