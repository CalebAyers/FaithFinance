import * as React from "react";
import { StyleSheet, View } from "react-native";
import Return from "./Return";
import Profile1 from "./Profile1";
import { Width, Height, Color, Padding, Gap } from "../GlobalStyles";

export type Default4Type = {
  state?: string;
  state1?: string;
  profileHeight?: string;
  profileTop?: string;
  profileRight?: string;
  profileBottom?: string;
  profileLeft?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default4 = ({
  state,
  state1,
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  profileColor,
}: Default4Type) => {
  return (
    <View style={styles.headerBarDefault}>
      <Return state={state} />
      <Profile1
        state="active"
        profilePosition="relative"
        profileTop="unset"
        profileLeft="unset"
        profileHeight="100%"
        profileRight="0%"
        profileBottom="0%"
        profileColor="#c99700"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarDefault: {
    marginRight: -1,
    width: Width.width_394,
    height: Height.height_90,
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
    zIndex: 6,
  },
});

export default Default4;
