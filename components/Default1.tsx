import * as React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Home1 from "./Home1";
import Dashboard1 from "./Dashboard1";
import Book1 from "./Book1";
import Profile1 from "./Profile1";
import {
  Height,
  Width,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

export type Default1Type = {
  iconMoney3?: ImageSourcePropType;
  state?: string;
  activePosition?: string;
  activeHeight?: string;
  activeTop?: string;
  activeRight?: string;
  activeBottom?: string;
  activeLeft?: string;
  homeColor?: string;
  state1?: string;
  activePosition1?: string;
  activeHeight1?: string;
  activeTop1?: string;
  activeRight1?: string;
  activeBottom1?: string;
  activeLeft1?: string;
  insightsColor?: string;
  state2?: string;
  bookPosition?: string;
  bookHeight?: string;
  bookTop?: string;
  bookRight?: string;
  bookBottom?: string;
  bookLeft?: string;
  reflectionColor?: string;
  state3?: string;
  profileHeight?: string;
  profileTop?: string;
  profileRight?: string;
  profileBottom?: string;
  profileLeft?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default1 = ({
  iconMoney3,
  state,
  activePosition,
  activeHeight,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
  homeColor,
  state1,
  activePosition1,
  activeHeight1,
  activeTop1,
  activeRight1,
  activeBottom1,
  activeLeft1,
  insightsColor,
  state2,
  bookPosition,
  bookHeight,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  reflectionColor,
  state3,
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  profileColor,
}: Default1Type) => {
  return (
    <View style={styles.navigationBarDefault}>
      <Home1 state="active" />
      <Image style={styles.iconMoney3} contentFit="cover" source={iconMoney3} />
      <Dashboard1 state="active" state1="default" />
      <Book1 state="active" state2="default" />
      <Profile1
        state="active"
        profilePosition="relative"
        profileTop="unset"
        profileLeft="unset"
        profileHeight="100%"
        profileRight="0%"
        profileBottom="0%"
        profileColor="#c99700"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarDefault: {
    height: Height.height_100,
    width: Width.width_394,
    position: "absolute",
    right: -1,
    bottom: 0,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    backgroundColor: Color.mainRed,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_45,
    zIndex: 3,
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default Default1;
