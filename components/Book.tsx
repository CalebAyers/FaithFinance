import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  Color,
  Height,
  Width,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type BookType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  bookHeight?: number | string;
  bookPosition?: string;
  bookTop?: number | string;
  bookRight?: number | string;
  bookBottom?: number | string;
  bookLeft?: number | string;
  reflectionColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Book = ({
  state = "default",
  bookHeight,
  bookPosition,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  vector,
  reflectionColor,
}: BookType) => {
  const bookStyle = useMemo(() => {
    return {
      ...getStyleValue("height", bookHeight),
      ...getStyleValue("position", bookPosition),
      ...getStyleValue("top", bookTop),
      ...getStyleValue("right", bookRight),
      ...getStyleValue("bottom", bookBottom),
      ...getStyleValue("left", bookLeft),
    };
  }, [bookHeight, bookPosition, bookTop, bookRight, bookBottom, bookLeft]);

  const reflectionStyle = useMemo(() => {
    return {
      ...getStyleValue("color", reflectionColor),
    };
  }, [reflectionColor]);

  return (
    <View style={[styles.iconBook, bookStyle]}>
      {vector}
      <Text style={[styles.reflection, styles.vectorIconClr, reflectionStyle]}>
        Reflection
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconClr: {
    color: Color.backgroundColorLightMode,
    position: "absolute",
  },
  iconBook: {
    height: Height.height_32,
    width: Width.width_32,
  },
  reflection: {
    top: 32,
    left: -14,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Book;
