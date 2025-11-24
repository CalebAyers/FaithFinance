import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Vector9 from "../assets/Vector9.svg";
import {
  Height,
  Width,
  BoxShadow,
  Padding,
  Color,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const Profile2 = () => {
  return (
    <View style={styles.iconProfile2}>
      <Vector9 style={styles.vectorIcon} width={50} height={Height.height_50} />
      <Text style={styles.profile}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconProfile2: {
    height: Height.height_60,
    width: Width.width_60,
    boxShadow: BoxShadow.shadow_drop5,
    elevation: 4,
    flexDirection: "row",
    padding: Padding.padding_5,
  },
  vectorIcon: {
    height: Height.height_50,
    width: 50,
    color: Color.backgroundColorLightMode1,
  },
  profile: {
    height: Height.height_19,
    width: 49,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    color: Color.goldButton,
    textAlign: "center",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile2;
