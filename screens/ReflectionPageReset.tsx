import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Profile from "../components/Profile";
import Vector8 from "../assets/Vector8.svg";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Home from "../components/Home";
import Vector7 from "../assets/Vector7.svg";
import Dashboard from "../components/Dashboard";
import Book from "../components/Book";
import Vector6 from "../assets/Vector6.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import {
  Color,
  Width,
  Height,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const ReflectionPageReset = () => {
  return (
    <ScrollView
      style={styles.reflectionPageReset}
      contentContainerStyle={styles.reflectionPageResetContent}
    >
      <View style={[styles.headerBarDefault, styles.barFlexBox]}>
        <Text style={styles.faithfinance}>FaithFinance</Text>
        <View style={[styles.iconProfile, styles.iconLayout]}>
          <Profile
            state="default"
            profileHeight="100%"
            profileTop="0%"
            profileLeft="0%"
            profileRight="0%"
            profileBottom="0%"
            profilePosition="absolute"
            vector={<Vector8 width={83} height={83} />}
            profileColor="#c99700"
          />
        </View>
      </View>
      <View style={styles.reflectionPageResetInner}>
        <View style={styles.frameParent}>
          <FrameComponent />
          <FrameComponent1 />
        </View>
      </View>
      <View style={[styles.navigationBarDefault, styles.barFlexBox]}>
        <View style={styles.iconLayout}>
          <Home
            state="default"
            home2Height="100%"
            home2Position="absolute"
            home2Top="0%"
            home2Right="0%"
            home2Bottom="0%"
            home2Left="0%"
            vector={<Vector7 width={67} height={73} />}
            homeColor="#c99700"
          />
        </View>
        <Image
          style={styles.iconMoney3}
          contentFit="cover"
          source={require("../assets/active1.png")}
        />
        <View style={styles.iconLayout}>
          <Dashboard state="default" />
        </View>
        <View style={styles.iconLayout}>
          <Book
            state="default"
            bookHeight="100%"
            bookPosition="absolute"
            bookTop="0%"
            bookRight="0%"
            bookBottom="0%"
            bookLeft="0%"
            vector={<Vector6 width={67} height={73} />}
            reflectionColor="#c99700"
          />
        </View>
        <View style={styles.iconLayout}>
          <Profile
            state="default"
            profileHeight="100%"
            profileTop="0%"
            profileLeft="0%"
            profileRight="0%"
            profileBottom="0%"
            profilePosition="absolute"
            vector={<Vector8 width={83} height={83} />}
            profileColor="#c99700"
          />
        </View>
      </View>
      <IPhoneBezel
        type="iPhone 16"
        iPhoneBezelHeight={854}
        iPhone16={require("../assets/iPhone-16.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reflectionPageResetContent: {
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 356,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
    flex: 1,
  },
  barFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.mainRed,
  },
  iconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  reflectionPageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  headerBarDefault: {
    marginLeft: -6,
    height: Height.height_90,
    width: Width.width_400,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_8,
    gap: Gap.gap_10,
    zIndex: 2,
  },
  faithfinance: {
    height: Height.height_47,
    width: Width.width_375,
    fontSize: FontSize.fs_18,
    lineHeight: LineHeight.lh_38,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    textAlign: "left",
    zIndex: 0,
  },
  iconProfile: {
    top: 29,
    left: 349,
    zIndex: 1,
    position: "absolute",
  },
  reflectionPageResetInner: {
    height: 498,
    paddingTop: 104,
    marginLeft: -379,
    width: 362,
  },
  frameParent: {
    height: 394,
    zIndex: null,
    gap: 27,
    width: 362,
  },
  navigationBarDefault: {
    height: Height.height_100,
    width: Width.width_394,
    right: -1,
    bottom: 0,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_45,
    zIndex: 3,
    position: "absolute",
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default ReflectionPageReset;
