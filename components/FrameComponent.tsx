import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import BibleVerses from "./BibleVerses";
import Home from "./Home";
import Vector from "../assets/Vector.svg";
import Dashboard from "./Dashboard";
import Vector8 from "../assets/Vector8.svg";
import Book from "./Book";
import Vector9 from "../assets/Vector9.svg";
import Profile from "./Profile";
import Vector11 from "../assets/Vector11.svg";
import {
  Width,
  Height,
  Padding,
  BoxShadow,
  Border,
  Color,
  Gap,
} from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.bibleVersesWrapper}>
        <BibleVerses />
      </View>
      <View style={styles.navigationBarDefault}>
        <View style={styles.iconLayout}>
          <Home
            state="default"
            activePosition="absolute"
            activeHeight="100%"
            activeTop="0%"
            activeRight="0%"
            activeBottom="0%"
            activeLeft="0%"
            homeColor="#c99700"
            vector={<Vector width={67} height={73} />}
          />
        </View>
        <Image
          style={styles.iconMoney3}
          contentFit="cover"
          source={require("../assets/active2.png")}
        />
        <Pressable style={styles.iconLayout}>
          <Dashboard
            state="default"
            dashboardHeight="100%"
            dashboardPosition="absolute"
            dashboardTop="0%"
            dashboardRight="0%"
            dashboardBottom="0%"
            dashboardLeft="0%"
            insightsColor="#c99700"
            vector={<Vector8 width={58} height={67} />}
          />
        </Pressable>
        <Pressable style={[styles.iconBook, styles.iconLayout]}>
          <Book
            state="default"
            bookHeight="100%"
            bookPosition="absolute"
            bookTop="0%"
            bookRight="0%"
            bookBottom="0%"
            bookLeft="0%"
            reflectionColor="#c99700"
            vector={<Vector9 width={67} height={73} />}
          />
        </Pressable>
        <Pressable style={styles.iconLayout} onPress={() => {}}>
          <Profile
            state="default"
            profilePosition="absolute"
            profileTop="0%"
            profileLeft="0%"
            profileHeight="100%"
            profileRight="0%"
            profileBottom="0%"
            profileColor="#c99700"
            vector={<Vector11 width={83} height={83} />}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  frameParent: {
    marginRight: -1,
    height: 224,
    width: Width.width_394,
  },
  bibleVersesWrapper: {
    width: Width.width_377,
    height: Height.height_150,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
  },
  navigationBarDefault: {
    height: Height.height_100,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    backgroundColor: Color.mainRed,
    overflow: "hidden",
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_45,
    zIndex: 2,
    marginTop: -26,
    flexDirection: "row",
    width: Width.width_394,
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
  iconBook: {
    boxShadow: BoxShadow.shadow_inner,
    elevation: 4,
  },
});

export default FrameComponent;
