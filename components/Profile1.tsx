import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Profile from "./Profile";
import Vector from "../assets/Vector.svg";
import { Height, Width } from "../GlobalStyles";

export type Profile1Type = {
  profileHeight?: string;
  profileRight?: string;
  profileBottom?: string;
  profileColor?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  profilePosition?: string;
  profileTop?: number | string;
  profileLeft?: number | string;

  /** Action props */
  onProfilePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Profile1 = ({
  state = "default",
  profilePosition,
  profileTop,
  profileLeft,
  onProfilePress,
  profileHeight,
  profileRight,
  profileBottom,
  profileColor,
}: Profile1Type) => {
  const profile2Style = useMemo(() => {
    return {
      ...getStyleValue("position", profilePosition),
      ...getStyleValue("top", profileTop),
      ...getStyleValue("left", profileLeft),
    };
  }, [profilePosition, profileTop, profileLeft]);

  return (
    <View style={[styles.iconProfile, profile2Style]} onPress={onProfilePress}>
      <Profile
        state="default"
        profileHeight={profileHeight}
        profileRight={profileRight}
        profileBottom={profileBottom}
        vector={<Vector width={83} height={83} />}
        profileColor={profileColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconProfile: {
    height: Height.height_32,
    width: Width.width_32,
    position: "absolute",
    top: 29,
    left: 349,
    zIndex: 1,
  },
});

export default Profile1;
