import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, LineHeight, FontFamily } from "../GlobalStyles";

export type BookType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  bookPosition?: string;
  bookHeight?: number | string;
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
  bookPosition,
  bookHeight,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  vector,
  reflectionColor,
}: BookType) => {
  const bookStyle = useMemo(() => {
    return {
      ...getStyleValue("position", bookPosition),
      ...getStyleValue("height", bookHeight),
      ...getStyleValue("top", bookTop),
      ...getStyleValue("right", bookRight),
      ...getStyleValue("bottom", bookBottom),
      ...getStyleValue("left", bookLeft),
    };
  }, [bookPosition, bookHeight, bookTop, bookRight, bookBottom, bookLeft]);

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
    color: Color.goldButton,
    position: "absolute",
  },
  iconBook: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
