import * as React from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Height, Width } from "../GlobalStyles";

export type MoneyType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;
};

const Money = ({ state = "default", vector }: MoneyType) => {
  return <View style={styles.iconMoney2}>{vector}</View>;
};

const styles = StyleSheet.create({
  iconMoney2: {
    height: Height.height_39,
    width: Width.width_39,
  },
});

export default Money;
