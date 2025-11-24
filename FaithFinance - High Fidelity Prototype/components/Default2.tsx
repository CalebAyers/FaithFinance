import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Profile from "./Profile";
import Vector8 from "../assets/Vector8.svg";
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

export type Default2Type = {
  state?: string;
  profileHeight?: string;
  profileTop?: string;
  profileRight?: string;
  profileBottom?: string;
  profileLeft?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default2 = ({
  state,
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  profileColor,
}: Default2Type) => {
  return (
    <View style={styles.headerBarDefault}>
      <Text style={styles.faithfinance}>FaithFinance</Text>
      <Profile
        state={state}
        profileHeight={profileHeight}
        profileTop={profileTop}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profileLeft={profileLeft}
        profilePosition={profilePosition}
        vector={<Vector8 width={83} height={83} />}
        profileColor={profileColor}
      />
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

export default Default2;
