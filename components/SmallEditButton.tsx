import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import Option from "./Option1";
import { Height, Width } from "../GlobalStyles";

export type SmallEditButtonType = {
  iconBible?: React.ReactNode;
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

  /** Style props */
  smallEditButtonWidth?: number | string;
  bibleIconWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallEditButton = ({
  state = "Default",
  smallEditButtonWidth,
  iconBible,
  bibleIconWidth,
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
}: SmallEditButtonType) => {
  const smallEditButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("width", smallEditButtonWidth),
    };
  }, [smallEditButtonWidth]);

  const bibleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", bibleIconWidth),
    };
  }, [bibleIconWidth]);

  return (
    <Pressable style={[styles.root, smallEditButtonStyle]}>
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
      {iconBible}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_40,
    width: Width.width_170,
    flexDirection: "row",
    zIndex: 1,
  },
});

export default SmallEditButton;
