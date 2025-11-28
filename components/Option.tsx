import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  BoxShadow,
  Border,
  Color,
  Padding,
  Height,
  Width,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type OptionType = {
  /** Variant props */
  state?: string;

  /** Style props */
  addTransactionColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Option = ({ state = "Default", addTransactionColor }: OptionType) => {
  const addTransactionStyle = useMemo(() => {
    return {
      ...getStyleValue("color", addTransactionColor),
    };
  }, [addTransactionColor]);

  return (
    <View style={styles.buttonAddTransaction}>
      <Text style={[styles.addTransaction, addTransactionStyle]}>
        Add Transaction
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonAddTransaction: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.mainRed,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_30,
    paddingVertical: Padding.padding_12,
  },
  addTransaction: {
    height: Height.height_38,
    width: Width.width_129,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    textAlign: "center",
  },
});

export default Option;
