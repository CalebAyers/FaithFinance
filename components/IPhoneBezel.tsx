import * as React from "react";
import { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Width, Height } from "../GlobalStyles";

export type IPhoneBezelType = {
  iPhone16?: ImageSourcePropType;

  /** Variant props */
  type?: string;

  /** Style props */
  iPhoneBezelHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IPhoneBezel = ({
  type = "iPhone 16",
  iPhoneBezelHeight,
  iPhone16,
}: IPhoneBezelType) => {
  const iPhoneBezelStyle = useMemo(() => {
    return {
      ...getStyleValue("height", iPhoneBezelHeight),
    };
  }, [iPhoneBezelHeight]);

  return (
    <View style={[styles.iphoneBezel, iPhoneBezelStyle]}>
      <Image style={styles.iphone16Icon} contentFit="cover" source={iPhone16} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneBezel: {
    width: Width.width_394,
    height: Height.height_854,
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
