import * as React from "react";
import { StyleSheet, View } from "react-native";
import Book from "./Book";
import Vector3 from "../assets/Vector3.svg";
import { Height, Width } from "../GlobalStyles";

export type Book1Type = {
  state2?: string;
  bookPosition?: string;
  bookHeight?: string;
  bookTop?: string;
  bookRight?: string;
  bookBottom?: string;
  bookLeft?: string;
  reflectionColor?: string;

  /** Variant props */
  state?: string;
};

const Book1 = ({
  state = "default",
  state2,
  bookPosition,
  bookHeight,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  reflectionColor,
}: Book1Type) => {
  return (
    <View style={styles.iconBook}>
      <Book
        state={state2}
        bookPosition={bookPosition}
        bookHeight={bookHeight}
        bookTop={bookTop}
        bookRight={bookRight}
        bookBottom={bookBottom}
        bookLeft={bookLeft}
        vector={<Vector3 width={67} height={73} />}
        reflectionColor={reflectionColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBook: {
    height: Height.height_32,
    width: Width.width_32,
  },
});

export default Book1;
