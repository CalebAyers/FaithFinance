import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  BoxShadow,
  Border,
  Color,
  Padding,
  Height,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type OptionType = {
  addTransaction?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  settingFaithGoalPosition?: string;
  settingFaithGoalHeight?: number | string;
  settingFaithGoalTop?: number | string;
  settingFaithGoalRight?: number | string;
  settingFaithGoalBottom?: number | string;
  settingFaithGoalLeft?: number | string;
  settingFaithGoalAlignSelf?: string;
  settingFaithGoalBackgroundColor?: string;
  settingFaithGoalBorderColor?: string;
  addTransactionHeight?: number | string;
  addTransactionWidth?: number | string;
  addTransactionFontSize?: number;
  addTransactionColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Option = ({
  state = "Default",
  settingFaithGoalPosition,
  settingFaithGoalHeight,
  settingFaithGoalTop,
  settingFaithGoalRight,
  settingFaithGoalBottom,
  settingFaithGoalLeft,
  settingFaithGoalAlignSelf,
  settingFaithGoalBackgroundColor,
  settingFaithGoalBorderColor,
  addTransaction,
  addTransactionHeight,
  addTransactionWidth,
  addTransactionFontSize,
  addTransactionColor,
}: OptionType) => {
  const settingFaithGoalStyle = useMemo(() => {
    return {
      ...getStyleValue("position", settingFaithGoalPosition),
      ...getStyleValue("height", settingFaithGoalHeight),
      ...getStyleValue("top", settingFaithGoalTop),
      ...getStyleValue("right", settingFaithGoalRight),
      ...getStyleValue("bottom", settingFaithGoalBottom),
      ...getStyleValue("left", settingFaithGoalLeft),
      ...getStyleValue("alignSelf", settingFaithGoalAlignSelf),
      ...getStyleValue("backgroundColor", settingFaithGoalBackgroundColor),
      ...getStyleValue("borderColor", settingFaithGoalBorderColor),
    };
  }, [
    settingFaithGoalPosition,
    settingFaithGoalHeight,
    settingFaithGoalTop,
    settingFaithGoalRight,
    settingFaithGoalBottom,
    settingFaithGoalLeft,
    settingFaithGoalAlignSelf,
    settingFaithGoalBackgroundColor,
    settingFaithGoalBorderColor,
  ]);

  const addTransactionStyle = useMemo(() => {
    return {
      ...getStyleValue("height", addTransactionHeight),
      ...getStyleValue("width", addTransactionWidth),
      ...getStyleValue("fontSize", addTransactionFontSize),
      ...getStyleValue("color", addTransactionColor),
    };
  }, [
    addTransactionHeight,
    addTransactionWidth,
    addTransactionFontSize,
    addTransactionColor,
  ]);

  return (
    <View style={[styles.buttonSettingFaithGoal, settingFaithGoalStyle]}>
      <Text style={[styles.addTransaction, addTransactionStyle]}>
        {addTransaction}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSettingFaithGoal: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.gOLD3,
    borderStyle: "solid",
    borderColor: Color.componentsBackgrounf,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_30,
    paddingVertical: Padding.padding_12,
  },
  addTransaction: {
    height: Height.height_38,
    width: 140,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.componentsBackgrounf,
    textAlign: "center",
  },
});

export default Option;
