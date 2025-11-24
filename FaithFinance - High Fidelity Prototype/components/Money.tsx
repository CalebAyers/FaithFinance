import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector4 from "../assets/Vector4.svg";
import { Height, Width, Color } from "../GlobalStyles";

export type MoneyType = {
  /** Variant props */
  state?: string;
};

const Money = ({ state = "default" }: MoneyType) => {
  return (
    <View style={styles.iconMoney2}>
      <Vector4 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconMoney2: {
    height: Height.height_39,
    width: Width.width_39,
  },
  vectorIcon: {
    position: "absolute",
    height: "89.49%",
    width: "89.49%",
    top: "5.13%",
    right: "5.38%",
    bottom: "5.38%",
    left: "5.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.gOLD3,
  },
});

export default Money;
