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
  addTransaction?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  addTransactionBackgroundColor?: string;
  addTransactionBorderStyle?: string;
  addTransactionBorderColor?: string;
  addTransactionBorderWidth?: number;
  addTransactionPosition?: string;
  addTransactionHeight?: number | string;
  addTransactionTop?: number | string;
  addTransactionRight?: number | string;
  addTransactionBottom?: number | string;
  addTransactionLeft?: number | string;
  addTransactionAlignSelf?: string;
  addTransactionColor?: string;
  addTransactionWidth?: number | string;
  addTransactionHeight1?: number | string;
  addTransactionFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Option = ({
  state = "Default",
  addTransactionBackgroundColor,
  addTransactionBorderStyle,
  addTransactionBorderColor,
  addTransactionBorderWidth,
  addTransactionPosition,
  addTransactionHeight,
  addTransactionTop,
  addTransactionRight,
  addTransactionBottom,
  addTransactionLeft,
  addTransactionAlignSelf,
  addTransaction,
  addTransactionColor,
  addTransactionWidth,
  addTransactionHeight1,
  addTransactionFontSize,
}: OptionType) => {
  const addTransactionStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", addTransactionBackgroundColor),
      ...getStyleValue("borderStyle", addTransactionBorderStyle),
      ...getStyleValue("borderColor", addTransactionBorderColor),
      ...getStyleValue("borderWidth", addTransactionBorderWidth),
      ...getStyleValue("position", addTransactionPosition),
      ...getStyleValue("height", addTransactionHeight),
      ...getStyleValue("top", addTransactionTop),
      ...getStyleValue("right", addTransactionRight),
      ...getStyleValue("bottom", addTransactionBottom),
      ...getStyleValue("left", addTransactionLeft),
      ...getStyleValue("alignSelf", addTransactionAlignSelf),
    };
  }, [
    addTransactionBackgroundColor,
    addTransactionBorderStyle,
    addTransactionBorderColor,
    addTransactionBorderWidth,
    addTransactionPosition,
    addTransactionHeight,
    addTransactionTop,
    addTransactionRight,
    addTransactionBottom,
    addTransactionLeft,
    addTransactionAlignSelf,
  ]);

  const addTransaction1Style = useMemo(() => {
    return {
      ...getStyleValue("color", addTransactionColor),
      ...getStyleValue("width", addTransactionWidth),
      ...getStyleValue("height", addTransactionHeight1),
      ...getStyleValue("fontSize", addTransactionFontSize),
    };
  }, [
    addTransactionColor,
    addTransactionWidth,
    addTransactionHeight1,
    addTransactionFontSize,
  ]);

  return (
    <View style={[styles.buttonAddTransaction, addTransactionStyle]}>
      <Text style={[styles.addTransaction, addTransaction1Style]}>
        {addTransaction}
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
