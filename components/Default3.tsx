import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Home from "./Home";
import Vector6 from "../assets/Vector6.svg";
import Dashboard from "./Dashboard";
import Vector7 from "../assets/Vector7.svg";
import Book1 from "./Book1";
import Profile from "./Profile";
import Vector8 from "../assets/Vector8.svg";
import {
  Height,
  Width,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

export type Default3Type = {
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
  profileHeight?: string;
  profileTop?: string;
  profileRight?: string;
  profileBottom?: string;
  profileLeft?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default3 = ({
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
  profileHeight,
  profileTop,
  profileRight,
  profileBottom,
  profileLeft,
  profilePosition,
  profileColor,
}: Default3Type) => {
  return (
    <View style={styles.navigationBarDefault}>
      <Home
        state={state}
        activePosition={activePosition}
        activeHeight={activeHeight}
        activeTop={activeTop}
        activeRight={activeRight}
        activeBottom={activeBottom}
        activeLeft={activeLeft}
        vector={<Vector6 width={67} height={73} />}
        homeColor={homeColor}
      />
      <Image
        style={styles.iconMoney3}
        contentFit="cover"
        source={require("../assets/Icon-money-31.png")}
      />
      <Dashboard
        state={state1}
        activePosition={activePosition1}
        activeHeight={activeHeight1}
        activeTop={activeTop1}
        activeRight={activeRight1}
        activeBottom={activeBottom1}
        activeLeft={activeLeft1}
        vector={<Vector7 width={58} height={67} />}
        insightsColor={insightsColor}
      />
      <Book1
        state="active"
        state2="default"
        bookPosition="absolute"
        bookHeight="100%"
        bookTop="0%"
        bookRight="0%"
        bookBottom="0%"
        bookLeft="0%"
        reflectionColor="#c99700"
      />
      <Profile
        state={state2}
        profileHeight={profileHeight}
        profileTop={profileTop}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profileLeft={profileLeft}
        profilePosition={profilePosition}
        vector={<Vector8 width={83} height={83} />}
        profileColor={profileColor}
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

export default Default3;
