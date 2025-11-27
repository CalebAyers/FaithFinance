import * as React from "react";
import { StyleSheet, View } from "react-native";
import ProfileIcons from "../assets/Profile-Icons.svg";
import { Height, Width, Color } from "../GlobalStyles";

export type ReturnType = {
  /** Variant props */
  state?: string;
};

const Return = ({ state = "Default" }: ReturnType) => {
  return (
    <View style={styles.iconReturn2}>
      <ProfileIcons style={styles.profileIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconReturn2: {
    height: Height.height_32,
    width: Width.width_32,
    overflow: "hidden",
  },
  profileIcons: {
    position: "absolute",
    height: "54.69%",
    width: "75%",
    top: "25%",
    right: "12.5%",
    bottom: "20.31%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    color: Color.backgroundColorLightMode,
    overflow: "hidden",
  },
});

export default Return;
