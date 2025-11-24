import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option1";
import IconBible2 from "../assets/Icon-Bible2.svg";
import { Gap, Height, Width } from "../GlobalStyles";

export type AddToFavoriteType = {
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
  state?: "Default" | "Active";

  /** Style props */
  addToFavoriteHeight?: number | string;
  bibleIconHeight?: number | string;
  bibleIconWidth?: number | string;
  bibleIconPosition?: string;
  bibleIconTop?: number | string;
  bibleIconRight?: number | string;
  bibleIconBottom?: number | string;
  bibleIconLeft?: number | string;
  bibleIconOverflow?: string;
  bibleIconMaxHeight?: number | string;
};

const getAddToFavoriteStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Active":
      return {
        flexDirection: null,
        gap: Gap.gap_10,
      };
  }
};
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AddToFavorite = ({
  state = "Default",
  addToFavoriteHeight,
  bibleIconHeight,
  bibleIconWidth,
  bibleIconPosition,
  bibleIconTop,
  bibleIconRight,
  bibleIconBottom,
  bibleIconLeft,
  bibleIconOverflow,
  bibleIconMaxHeight,
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
}: AddToFavoriteType) => {
  const variantKey = `${state}`;

  const addToFavoriteStyle = useMemo(() => {
    return {
      ...getStyleValue("height", addToFavoriteHeight),
    };
  }, [addToFavoriteHeight]);

  const bibleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", bibleIconHeight),
      ...getStyleValue("width", bibleIconWidth),
      ...getStyleValue("position", bibleIconPosition),
      ...getStyleValue("top", bibleIconTop),
      ...getStyleValue("right", bibleIconRight),
      ...getStyleValue("bottom", bibleIconBottom),
      ...getStyleValue("left", bibleIconLeft),
      ...getStyleValue("overflow", bibleIconOverflow),
      ...getStyleValue("maxHeight", bibleIconMaxHeight),
    };
  }, [
    bibleIconHeight,
    bibleIconWidth,
    bibleIconPosition,
    bibleIconTop,
    bibleIconRight,
    bibleIconBottom,
    bibleIconLeft,
    bibleIconOverflow,
    bibleIconMaxHeight,
  ]);

  return (
    <Pressable
      style={[
        styles.root,
        getAddToFavoriteStyle(variantKey),
        addToFavoriteStyle,
      ]}
    >
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
      <IconBible2
        style={[styles.iconBible, bibleIconStyle]}
        width={Width.width_9_03}
        height={Height.height_20_8}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_40,
    width: Width.width_125,
    flexDirection: "row",
    zIndex: 2,
  },
  iconBible: {
    height: Height.height_20_8,
    width: Width.width_9_03,
    display: "none",
  },
});

export default AddToFavorite;
