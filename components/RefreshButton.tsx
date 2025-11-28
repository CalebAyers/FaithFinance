import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option";
import IconBible3 from "../assets/Icon-Bible3.svg";
import { Height, Width } from "../GlobalStyles";

export type RefreshButtonType = {
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

const RefreshButton = ({
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
}: RefreshButtonType) => {
  return (
    <Pressable style={styles.refreshButton}>
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
        addTransactionHeight1="unset"
        addTransactionFontSize={addTransactionFontSize}
      />
      <IconBible3 style={styles.iconBible} width={9} height={21} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  refreshButton: {
    height: Height.height_40,
    width: Width.width_125,
    flexDirection: "row",
    zIndex: 1,
  },
  iconBible: {
    height: 21,
    width: 9,
    display: "none",
  },
});

export default RefreshButton;
