import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option";
import IconBible3 from "../assets/Icon-Bible3.svg";
import { Width, Gap } from "../GlobalStyles";

export type AddToFavoriteType = {
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

const AddToFavorite = ({
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
}: AddToFavoriteType) => {
  return (
    <Pressable style={styles.addToFavorite}>
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
      <IconBible3 style={styles.iconBible} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addToFavorite: {
    width: Width.width_125,
    gap: Gap.gap_10,
    zIndex: 2,
  },
  iconBible: {
    width: "7.2%",
    height: "52%",
    position: "absolute",
    top: "24%",
    right: "72%",
    bottom: "24%",
    left: "20.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
    zIndex: 1,
  },
});

export default AddToFavorite;
