import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option";
import IconBible2 from "../assets/Icon-Bible2.svg";
import { Width, Height } from "../GlobalStyles";

export type SettingFaithGoalType = {
  state1?: string;
  addTransaction?: string;
  addTransactionBackgroundColor?: string;
  addTransactionBorderStyle?: string;
  addTransactionBorderColor?: string;
  addTransactionBorderWidth?: number;
  addTransactionPosition?: string;
  addTransactionHeight?: string;
  addTransactionTop?: string;
  addTransactionRight?: string;
  addTransactionBottom?: string;
  addTransactionLeft?: string;
  addTransactionAlignSelf?: string;
  addTransactionColor?: string;
  addTransactionWidth?: string;
  addTransactionFontSize?: number;

  /** Variant props */
  state?: string;
};

const SettingFaithGoal = ({
  state = "Default",
  state1,
  addTransaction,
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
  addTransactionColor,
  addTransactionWidth,
  addTransactionFontSize,
}: SettingFaithGoalType) => {
  return (
    <Pressable style={styles.settingFaithGoal}>
      <Option
        state={state1}
        addTransactionBackgroundColor={addTransactionBackgroundColor}
        addTransactionBorderStyle={addTransactionBorderStyle}
        addTransactionBorderColor={addTransactionBorderColor}
        addTransactionBorderWidth={addTransactionBorderWidth}
        addTransactionPosition={addTransactionPosition}
        addTransactionHeight={addTransactionHeight}
        addTransactionTop={addTransactionTop}
        addTransactionRight={addTransactionRight}
        addTransactionBottom={addTransactionBottom}
        addTransactionLeft={addTransactionLeft}
        addTransactionAlignSelf={addTransactionAlignSelf}
        addTransaction={addTransaction}
        addTransactionColor={addTransactionColor}
        addTransactionWidth={addTransactionWidth}
        addTransactionHeight1={38}
        addTransactionFontSize={addTransactionFontSize}
      />
      <IconBible2 style={styles.iconBible} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  settingFaithGoal: {
    width: Width.width_360,
    height: Height.height_50,
  },
  iconBible: {
    position: "absolute",
    height: "52%",
    width: "7.22%",
    top: "24%",
    right: "71.94%",
    bottom: "24%",
    left: "20.83%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
  },
});

export default SettingFaithGoal;
