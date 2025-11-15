import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Option from "./Option";
import Add from "./Add";
import Vector10 from "../assets/Vector10.svg";
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
        <Option state={state} addTransactionColor={addTransactionColor} />
        <Add
          state={state1}
          addHeight={addHeight}
          addTop={addTop}
          addBottom={addBottom}
          addMarginTop={addMarginTop}
          vector={<Vector10 width={58} height={58} />}
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
