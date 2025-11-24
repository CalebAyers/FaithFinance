import * as React from "react";
import { useMemo } from "react";
import { Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import IconBible5 from "../assets/Icon-Bible5.svg";
import Option from "./Option1";
import { Width, Height } from "../GlobalStyles";

export type FavoriteVersesType = {
  iconBible?: React.ReactNode;
  showBibleIcon?: boolean;
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
  favoriteVersesFlexDirection?: string;
  favoriteVersesAlignItems?: string;
  bibleIconPosition?: string;
  bibleIconHeight?: number | string;
  bibleIconWidth?: number | string;
  bibleIconTop?: number | string;
  bibleIconRight?: number | string;
  bibleIconBottom?: number | string;
  bibleIconLeft?: number | string;
  bibleIconOverflow?: string;
  bibleIconMaxHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FavoriteVerses = ({
  state = "Default",
  favoriteVersesFlexDirection,
  favoriteVersesAlignItems,
  iconBible,
  showBibleIcon,
  bibleIconPosition,
  bibleIconHeight,
  bibleIconWidth,
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
}: FavoriteVersesType) => {
  const favoriteVersesStyle = useMemo(() => {
    return {
      ...getStyleValue("flexDirection", favoriteVersesFlexDirection),
      ...getStyleValue("alignItems", favoriteVersesAlignItems),
    };
  }, [favoriteVersesFlexDirection, favoriteVersesAlignItems]);

  const bibleIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("position", bibleIconPosition),
      ...getStyleValue("height", bibleIconHeight),
      ...getStyleValue("width", bibleIconWidth),
      ...getStyleValue("top", bibleIconTop),
      ...getStyleValue("right", bibleIconRight),
      ...getStyleValue("bottom", bibleIconBottom),
      ...getStyleValue("left", bibleIconLeft),
      ...getStyleValue("overflow", bibleIconOverflow),
      ...getStyleValue("maxHeight", bibleIconMaxHeight),
    };
  }, [
    bibleIconPosition,
    bibleIconHeight,
    bibleIconWidth,
    bibleIconTop,
    bibleIconRight,
    bibleIconBottom,
    bibleIconLeft,
    bibleIconOverflow,
    bibleIconMaxHeight,
  ]);

  return (
    <Pressable style={[styles.root, favoriteVersesStyle]}>
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
      {!!showBibleIcon && iconBible}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_45,
  },
});

export default FavoriteVerses;
