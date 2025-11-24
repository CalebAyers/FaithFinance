import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, LineHeight, FontFamily } from "../GlobalStyles";

export type ProfileType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  profileHeight?: number | string;
  profileTop?: number | string;
  profileRight?: number | string;
  profileBottom?: number | string;
  profileLeft?: number | string;
  profilePosition?: string;
  profileColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Profile = ({
  state = "default",
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  vector,
  profileColor,
}: ProfileType) => {
  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("height", profileHeight),
      ...getStyleValue("top", profileTop),
      ...getStyleValue("right", profileRight),
      ...getStyleValue("bottom", profileBottom),
      ...getStyleValue("left", profileLeft),
      ...getStyleValue("position", profilePosition),
    };
  }, [
    profileHeight,
    profileTop,
    profileRight,
    profileBottom,
    profileLeft,
    profilePosition,
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
    color: Color.goldButton,
    position: "absolute",
  },
  iconProfile: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
