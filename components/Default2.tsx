import * as React from "react";
import { StyleSheet, View } from "react-native";
import Return from "./Return";
import ReturnIcon from "../assets/Return-Icon.svg";
import Profile from "./Profile";
import Vector7 from "../assets/Vector7.svg";
import { Height, Width, Color, Padding, Gap } from "../GlobalStyles";

export type Default2Type = {
  state?: "Default" | "Active";
  state1?: string;
  profilePosition?: string;
  profileTop?: string;
  profileLeft?: string;
  profileHeight?: string;
  profileRight?: string;
  profileBottom?: string;
  profileColor?: string;
};

const Default2 = ({
  state = "Default",
  state1,
  profilePosition,
  profileTop,
  profileLeft,
  profileHeight,
  profileRight,
  profileBottom,
  profileColor,
}: Default2Type) => {
  return (
    <View style={styles.headerBarDefault}>
      <Return
        state={state}
        returnIcon={<ReturnIcon width={75} height={55} />}
      />
      <Profile
        state={state1}
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
    height: Height.height_90,
    width: Width.width_394,
    backgroundColor: Color.mainRed,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingRight: Padding.padding_24,
    paddingBottom: Padding.padding_18,
    gap: Gap.gap_20,
  },
});

export default Default2;
