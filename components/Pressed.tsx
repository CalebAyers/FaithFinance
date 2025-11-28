import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Option from "./Option1";
import Add from "./Add";
import { Height, Width } from "../GlobalStyles";

export type PressedType = {
  state?: string;
  addTransactionColor?: string;
  state1?: string;
  addHeight?: string;
  addTop?: string;
  addBottom?: string;
  addMarginTop?: string;
};

const Pressed = ({
  state,
  addTransactionColor,
  state1,
  addHeight,
  addTop,
  addBottom,
  addMarginTop,
}: PressedType) => {
  return (
    <Pressable style={[styles.buttonAddTransaction, styles.buttonLayout]}>
      <View style={styles.buttonLayout}>
        <Option
          state={state}
          addTransactionColor={addTransactionColor}
          addTransactionPosition="absolute"
          addTransactionHeight="100%"
          addTransactionTop="0%"
          addTransactionRight="0%"
          addTransactionBottom="0%"
          addTransactionLeft="0%"
          addTransactionBackgroundColor="#8b0000"
          addTransactionBorderStyle="unset"
          addTransactionBorderColor="unset"
          addTransaction="Add Transaction"
          addTransactionHeight1={38}
          addTransactionWidth={129}
          addTransactionFontSize={16}
        />
        <Add
          state={state1}
          addHeight={addHeight}
          addTop={addTop}
          addBottom={addBottom}
          addMarginTop={addMarginTop}
          addWidth="7.22%"
          addLeft="23.06%"
          vectorIconWidth="58.46%"
          vectorIconRight="20.77%"
          vectorIconLeft="20.77%"
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
