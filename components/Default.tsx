import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Home from "./Home";
import Vector from "../assets/Vector.svg";
import Dashboard from "./Dashboard";
import Vector4 from "../assets/Vector4.svg";
import Book from "./Book";
import Vector2 from "../assets/Vector2.svg";
import Profile from "./Profile";
import Vector7 from "../assets/Vector7.svg";
import {
  BoxShadow,
  Border,
  Color,
  Width,
  Height,
  Padding,
  Gap,
} from "../GlobalStyles";

export type DefaultType = {
  state?: string;
  activePosition?: string;
  activeHeight?: string;
  activeTop?: string;
  activeRight?: string;
  activeBottom?: string;
  activeLeft?: string;
  homeColor?: string;
  state1?: string;
  dashboardHeight?: string;
  dashboardPosition?: string;
  dashboardElevation?: number;
  dashboardTop?: string;
  dashboardRight?: string;
  dashboardBottom?: string;
  dashboardLeft?: string;
  insightsColor?: string;
  state2?: string;
  bookHeight?: string;
  bookPosition?: string;
  bookTop?: string;
  bookRight?: string;
  bookBottom?: string;
  bookLeft?: string;
  reflectionColor?: string;
  state3?: string;
  profilePosition?: string;
  profileTop?: string;
  profileLeft?: string;
  profileHeight?: string;
  profileRight?: string;
  profileBottom?: string;
  profileColor?: string;
};

const Default = ({
  state,
  activePosition,
  activeHeight,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
  homeColor,
  state1,
  dashboardHeight,
  dashboardPosition,
  dashboardElevation,
  dashboardTop,
  dashboardRight,
  dashboardBottom,
  dashboardLeft,
  insightsColor,
  state2,
  bookHeight,
  bookPosition,
  bookTop,
  bookRight,
  bookBottom,
  bookLeft,
  reflectionColor,
  state3,
  profilePosition,
  profileTop,
  profileLeft,
  profileHeight,
  profileRight,
  profileBottom,
  profileColor,
}: DefaultType) => {
  return (
    <View style={styles.navigationBarDefault}>
      <View style={styles.iconHome2}>
        <Home
          state={state}
          activePosition={activePosition}
          activeHeight={activeHeight}
          activeTop={activeTop}
          activeRight={activeRight}
          activeBottom={activeBottom}
          activeLeft={activeLeft}
          homeColor={homeColor}
          vector={<Vector width={67} height={73} />}
        />
      </View>
      <Image
        style={styles.iconMoney3}
        contentFit="cover"
        source={require("../assets/Icon-money-3.png")}
      />
      <Dashboard
        state={state1}
        dashboardHeight={dashboardHeight}
        dashboardPosition={dashboardPosition}
        dashboardElevation={dashboardElevation}
        dashboardTop={dashboardTop}
        dashboardRight={dashboardRight}
        dashboardBottom={dashboardBottom}
        dashboardLeft={dashboardLeft}
        insightsColor={insightsColor}
        vector={<Vector4 width={58} height={67} />}
      />
      <Book
        state={state2}
        bookHeight={bookHeight}
        bookPosition={bookPosition}
        bookTop={bookTop}
        bookRight={bookRight}
        bookBottom={bookBottom}
        bookLeft={bookLeft}
        reflectionColor={reflectionColor}
        vector={<Vector2 width={67} height={73} />}
      />
      <Profile
        state={state3}
        profilePosition={profilePosition}
        profileTop={profileTop}
        profileLeft={profileLeft}
        profileHeight={profileHeight}
        profileRight={profileRight}
        profileBottom={profileBottom}
        profileColor={profileColor}
        vector={<Vector7 width={83} height={83} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarDefault: {
    position: "absolute",
    top: 5,
    left: 0,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    backgroundColor: Color.mainRed,
    width: Width.width_394,
    height: Height.height_100,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_20,
    gap: Gap.gap_45,
  },
  iconHome2: {
    height: Height.height_32,
    width: Width.width_32,
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default Default;
