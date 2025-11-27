import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option1";
import IconBible2 from "../assets/Icon-Bible2.svg";
import { Height, Width } from "../GlobalStyles";

export type RefreshButtonType = {
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

const RefreshButton = ({
  state = "Default",
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
}: RefreshButtonType) => {
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
      <IconBible2
        style={styles.iconBible}
        width={Width.width_9_03}
        height={Height.height_20_8}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_40,
    width: Width.width_125,
    flexDirection: "row",
    zIndex: 1,
  },
  iconBible: {
    height: Height.height_20_8,
    width: Width.width_9_03,
    display: "none",
  },
});

export default RefreshButton;
