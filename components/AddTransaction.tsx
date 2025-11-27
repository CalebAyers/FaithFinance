import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option1";
import Add from "./Add";
import { Width, Height } from "../GlobalStyles";

export type AddTransactionType = {
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
  addTransactionFontSize?: number;
  state2?: string;
  addHeight?: string;
  addTop?: string;
  addBottom?: string;
  addMarginTop?: string;
  addWidth?: string;
  addLeft?: string;
  vectorIconWidth?: string;
  vectorIconRight?: string;
  vectorIconLeft?: string;

  /** Variant props */
  state?: "Default" | "Active";

  /** Style props */
  addTransactionWidth?: number | string;

  /** Action props */
  onAddTransactionPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AddTransaction = ({
  state = "Default",
  onAddTransactionPress,
  addTransactionWidth,
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
  addTransactionFontSize,
  state2,
  addHeight,
  addTop,
  addBottom,
  addMarginTop,
  addWidth,
  addLeft,
  vectorIconWidth,
  vectorIconRight,
  vectorIconLeft,
}: AddTransactionType) => {
  const addTransaction2Style = useMemo(() => {
    return {
      ...getStyleValue("width", addTransactionWidth),
    };
  }, [addTransactionWidth]);

  return (
    <Pressable
      style={[styles.root, addTransaction2Style]}
      onPress={onAddTransactionPress}
    >
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
        addTransactionFontSize={addTransactionFontSize}
      />
      <Add
        state={state2}
        addHeight={addHeight}
        addTop={addTop}
        addBottom={addBottom}
        addMarginTop={addMarginTop}
        addWidth={addWidth}
        addLeft={addLeft}
        vectorIconWidth={vectorIconWidth}
        vectorIconRight={vectorIconRight}
        vectorIconLeft={vectorIconLeft}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_50,
  },
});

export default AddTransaction;
