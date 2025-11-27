import * as React from "react";
import { Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import Option from "./Option1";
import { Width, Height } from "../GlobalStyles";

export type SettingFaithGoalType = {
  iconBible?: React.ReactNode;
  state1?: string;
  addTransaction?: string;
  settingFaithGoalPosition?: string;
  settingFaithGoalHeight?: string;
  settingFaithGoalTop?: string;
  settingFaithGoalRight?: string;
  settingFaithGoalBottom?: string;
  settingFaithGoalLeft?: string;
  settingFaithGoalAlignSelf?: string;
  settingFaithGoalBackground?: string;
  settingFaithGoalBorderColor?: string;
  addTransactionHeight?: string;
  addTransactionWidth?: string;
  addTransactionFontSize?: number;
  addTransactionColor?: string;

  /** Variant props */
  state?: "Default" | "Active";
};

const SettingFaithGoal = ({
  state = "Default",
  iconBible,
  state1,
  addTransaction,
  settingFaithGoalPosition,
  settingFaithGoalHeight,
  settingFaithGoalTop,
  settingFaithGoalRight,
  settingFaithGoalBottom,
  settingFaithGoalLeft,
  settingFaithGoalAlignSelf,
  settingFaithGoalBackground,
  settingFaithGoalBorderColor,
  addTransactionHeight,
  addTransactionWidth,
  addTransactionFontSize,
  addTransactionColor,
}: SettingFaithGoalType) => {
  return (
    <Pressable style={styles.root}>
      <Option
        state={state1}
        settingFaithGoalPosition={settingFaithGoalPosition}
        settingFaithGoalHeight={settingFaithGoalHeight}
        settingFaithGoalTop={settingFaithGoalTop}
        settingFaithGoalRight={settingFaithGoalRight}
        settingFaithGoalBottom={settingFaithGoalBottom}
        settingFaithGoalLeft={settingFaithGoalLeft}
        settingFaithGoalAlignSelf={settingFaithGoalAlignSelf}
        settingFaithGoalBackgroundColor={settingFaithGoalBackground}
        settingFaithGoalBorderColor={settingFaithGoalBorderColor}
        addTransaction={addTransaction}
        addTransactionHeight={addTransactionHeight}
        addTransactionWidth={addTransactionWidth}
        addTransactionFontSize={addTransactionFontSize}
        addTransactionColor={addTransactionColor}
      />
      {iconBible}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_50,
  },
});

export default SettingFaithGoal;
