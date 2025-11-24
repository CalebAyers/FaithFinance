import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Height, Width } from "../GlobalStyles";

export type IPhoneBezelType = {
  iPhone16?: ImageSourcePropType;

  /** Variant props */
  type?: string;
};

const IPhoneBezel = ({ type = "iPhone 16", iPhone16 }: IPhoneBezelType) => {
  return (
    <View style={styles.iphoneBezel}>
      <Image style={styles.iphone16Icon} contentFit="cover" source={iPhone16} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneBezel: {
    height: Height.height_854,
    width: Width.width_394,
    top: -2,
    right: -1,
    zIndex: 2,
    position: "absolute",
  },
  iphone16Icon: {
    top: -30,
    left: -30,
    width: Width.width_453,
    height: Height.height_912,
    position: "absolute",
  },
});

export default IPhoneBezel;
