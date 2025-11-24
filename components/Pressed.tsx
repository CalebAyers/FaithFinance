import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Option from "./Option";
import Add from "./Add";
import Vector12 from "../assets/Vector12.svg";
import { Height, Width } from "../GlobalStyles";

export type PressedType = {
  state?: string;
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
  state1?: string;
  addHeight?: string;
  addWidth?: string;
  addTop?: string;
  addBottom?: string;
  addLeft?: string;
  addMarginTop?: string;
  vectorIconWidth?: string;
  vectorIconRight?: string;
  vectorIconLeft?: string;
};

const Pressed = ({
  state,
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
  state1,
  addHeight,
  addWidth,
  addTop,
  addBottom,
  addLeft,
  addMarginTop,
  vectorIconWidth,
  vectorIconRight,
  vectorIconLeft,
}: PressedType) => {
  return (
    <Pressable style={[styles.buttonAddTransaction, styles.buttonLayout]}>
      <View style={styles.buttonLayout}>
        <Option
          state={state}
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
        <Add
          state={state1}
          addHeight={addHeight}
          addWidth={addWidth}
          addTop={addTop}
          addBottom={addBottom}
          addLeft={addLeft}
          addMarginTop={addMarginTop}
          vector={<Vector12 width={58} height={58} />}
          vectorIconWidth={vectorIconWidth}
          vectorIconRight={vectorIconRight}
          vectorIconLeft={vectorIconLeft}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: Height.height_50,
    width: Width.width_360,
  },
  buttonAddTransaction: {
    flexDirection: "row",
    zIndex: 1,
  },
});

export default Pressed;
