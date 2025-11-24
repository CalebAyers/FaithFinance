import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import Home from "./Home";
import Vector5 from "../assets/Vector5.svg";
import Dashboard from "./Dashboard";
import Book from "./Book";
import Vector1 from "../assets/Vector1.svg";
import Profile from "./Profile";
import Vector4 from "../assets/Vector4.svg";
import {
  Width,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

export type Default1Type = {
  iconMoney3?: ImageSourcePropType;
  state?: string;
  home2Height?: string;
  home2Position?: string;
  home2Top?: string;
  home2Right?: string;
  home2Bottom?: string;
  home2Left?: string;
  homeColor?: string;
  state1?: string;
  state2?: string;
  bookHeight?: string;
  bookPosition?: string;
  bookTop?: string;
  bookRight?: string;
  bookBottom?: string;
  bookLeft?: string;
  reflectionColor?: string;
  state3?: string;
  profileHeight?: string;
  profileTop?: string;
  profileLeft?: string;
  profileRight?: string;
  profileBottom?: string;
  profilePosition?: string;
  profileColor?: string;
};

const Default1 = ({
  iconMoney3,
  state,
  home2Height,
  home2Position,
  home2Top,
  home2Right,
  home2Bottom,
  home2Left,
  homeColor,
  state1,
  state2,
  bookHeight,
  bookPosition,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  reflectionColor,
  state3,
  profileHeight,
  profileTop,
  profileLeft,
  profileRight,
  profileBottom,
  profilePosition,
  profileColor,
}: Default1Type) => {
  return (
    <View style={styles.navigationBarDefault}>
      <Home
        state={state}
        home2Height={home2Height}
        home2Position={home2Position}
        home2Top={home2Top}
        home2Right={home2Right}
        home2Bottom={home2Bottom}
        home2Left={home2Left}
        vector={<Vector5 width={67} height={73} />}
        homeColor={homeColor}
      />
      <Image style={styles.iconMoney3} contentFit="cover" source={iconMoney3} />
      <View style={styles.iconDashboard}>
        <Dashboard state={state1} />
      </View>
      <Book
        state={state2}
        bookHeight={bookHeight}
        bookPosition={bookPosition}
        bookTop={bookTop}
        bookRight={bookRight}
        bookBottom={bookBottom}
        bookLeft={bookLeft}
        vector={<Vector1 width={67} height={73} />}
        reflectionColor={reflectionColor}
      />
      <Profile
        state={state3}
        profileHeight={profileHeight}
        profileTop={profileTop}
        profileLeft={profileLeft}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profilePosition={profilePosition}
        vector={<Vector4 width={83} height={83} />}
        profileColor={profileColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarDefault: {
    marginRight: -1,
    width: Width.width_394,
    height: Height.height_100,
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
  iconDashboard: {
    height: Height.height_32,
    width: Width.width_32,
  },
});

export default Default1;
