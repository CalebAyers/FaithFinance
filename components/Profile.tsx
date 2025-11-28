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

export type ProfileType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  profilePosition?: string;
  profileTop?: number | string;
  profileLeft?: number | string;
  profileHeight?: number | string;
  profileRight?: number | string;
  profileBottom?: number | string;
  profileColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Profile = ({
  state = "default",
  profilePosition,
  profileTop,
  profileLeft,
  profileHeight,
  profileRight,
  profileBottom,
  vector,
  profileColor,
}: ProfileType) => {
  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("position", profilePosition),
      ...getStyleValue("top", profileTop),
      ...getStyleValue("left", profileLeft),
      ...getStyleValue("height", profileHeight),
      ...getStyleValue("right", profileRight),
      ...getStyleValue("bottom", profileBottom),
    };
  }, [
    profilePosition,
    profileTop,
    profileLeft,
    profileHeight,
    profileRight,
    profileBottom,
  ]);

  const profile1Style = useMemo(() => {
    return {
      ...getStyleValue("color", profileColor),
    };
  }, [profileColor]);

  return (
    <View style={[styles.iconProfile, profileStyle]}>
      {vector}
      <Text style={[styles.profile, styles.profileClr, profile1Style]}>
        Profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileClr: {
    color: Color.backgroundColorLightMode,
    position: "absolute",
  },
  iconProfile: {
    height: Height.height_32,
    width: Width.width_32,
  },
  profile: {
    top: 30,
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

export default Profile;
