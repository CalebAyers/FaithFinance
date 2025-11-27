import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option1";
import IconBible6 from "../assets/Icon-Bible6.svg";
import { Height } from "../GlobalStyles";

export type SmallEditButtonType = {
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
  state?: string;
};

const SmallEditButton = ({
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
}: SmallEditButtonType) => {
  return (
    <Pressable style={styles.smallEditButton}>
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
      <IconBible6
        style={styles.iconBible}
        width={8}
        height={Height.height_20_8}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  smallEditButton: {
    height: Height.height_40,
    width: 110,
    flexDirection: "row",
  },
  iconBible: {
    height: Height.height_20_8,
    width: 8,
    display: "none",
  },
});

export default SmallEditButton;
