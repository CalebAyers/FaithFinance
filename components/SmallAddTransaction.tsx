import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option1";
import IconBible1 from "../assets/Icon-Bible1.svg";
import { Height, Width } from "../GlobalStyles";

export type SmallAddTransactionType = {
  state1?: string;
  addTransaction?: string;
  addTransactionColor?: string;
  addTransactionPosition?: string;
  addTransactionHeight?: string;
  addTransactionTop?: string;
  addTransactionRight?: string;
  addTransactionBottom?: string;
  addTransactionLeft?: string;
  addTransactionBackgroundColor?: string;
  addTransactionBorderStyle?: string;
  addTransactionBorderColor?: string;
  addTransactionBorderWidth?: number;
  addTransactionWidth?: string;
  addTransactionFontSize?: number;

  /** Variant props */
  state?: "Default" | "Active";
};

const SmallAddTransaction = ({
  state = "Default",
  state1,
  addTransaction,
  addTransactionColor,
  addTransactionPosition,
  addTransactionHeight,
  addTransactionTop,
  addTransactionRight,
  addTransactionBottom,
  addTransactionLeft,
  addTransactionBackgroundColor,
  addTransactionBorderStyle,
  addTransactionBorderColor,
  addTransactionBorderWidth,
  addTransactionWidth,
  addTransactionFontSize,
}: SmallAddTransactionType) => {
  return (
    <Pressable style={styles.root}>
      <Option
        state={state1}
        addTransactionColor={addTransactionColor}
        addTransactionPosition={addTransactionPosition}
        addTransactionHeight={addTransactionHeight}
        addTransactionTop={addTransactionTop}
        addTransactionRight={addTransactionRight}
        addTransactionBottom={addTransactionBottom}
        addTransactionLeft={addTransactionLeft}
        addTransactionBackgroundColor={addTransactionBackgroundColor}
        addTransactionBorderStyle={addTransactionBorderStyle}
        addTransactionBorderColor={addTransactionBorderColor}
        addTransactionBorderWidth={addTransactionBorderWidth}
        addTransaction={addTransaction}
        addTransactionHeight1="unset"
        addTransactionWidth={addTransactionWidth}
        addTransactionFontSize={addTransactionFontSize}
      />
      <IconBible1
        style={styles.iconBible}
        width={Width.width_12_28}
        height={Height.height_20_8}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_40,
    width: Width.width_170,
    flexDirection: "row",
    zIndex: 2,
  },
  iconBible: {
    height: Height.height_20_8,
    width: Width.width_12_28,
    display: "none",
  },
});

export default SmallAddTransaction;
