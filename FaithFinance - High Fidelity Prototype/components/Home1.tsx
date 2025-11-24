import * as React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Home";
import Vector1 from "../assets/Vector1.svg";
import { Height, Width } from "../GlobalStyles";

export type Home1Type = {
  activePosition?: string;
  activeHeight?: string;
  activeTop?: string;
  activeRight?: string;
  activeBottom?: string;
  activeLeft?: string;
  homeColor?: string;

  /** Variant props */
  state?: string;
};

const Home1 = ({
  state = "default",
  activePosition,
  activeHeight,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
  homeColor,
}: Home1Type) => {
  return (
    <View style={styles.iconHome2}>
      <Home
        state="default"
        activePosition={activePosition}
        activeHeight={activeHeight}
        activeTop={activeTop}
        activeRight={activeRight}
        activeBottom={activeBottom}
        activeLeft={activeLeft}
        vector={<Vector1 width={67} height={73} />}
        homeColor={homeColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconHome2: {
    height: Height.height_32,
    width: Width.width_32,
  },
});

export default Home1;
