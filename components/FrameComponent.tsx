import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BibleVerses from "./BibleVerses";
import Home from "./Home";
import Vector6 from "../assets/Vector6.svg";
import Dashboard from "./Dashboard";
import Vector7 from "../assets/Vector7.svg";
import Book from "./Book";
import Vector10 from "../assets/Vector10.svg";
import Profile1 from "./Profile1";
import {
  Width,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={styles.bibleVersesWrapper}>
        <BibleVerses />
      </View>
      <View style={styles.navigationBarDefault}>
        <Home
          state="default"
          activePosition="relative"
          activeHeight={32}
          activeTop="unset"
          activeRight="unset"
          activeBottom="unset"
          activeLeft="unset"
          vector={<Vector6 width={67} height={73} />}
          homeColor="#e5e5e5"
        />
        <Image
          style={styles.iconMoney3}
          contentFit="cover"
          source={require("../assets/Icon-money-31.png")}
        />
        <Dashboard
          state="default"
          activePosition="relative"
          activeHeight={32}
          activeTop="unset"
          activeRight="unset"
          activeBottom="unset"
          activeLeft="unset"
          vector={<Vector7 width={58} height={67} />}
          insightsColor="#e5e5e5"
        />
        <Book
          state="default"
          bookPosition="relative"
          bookHeight={32}
          bookTop="unset"
          bookRight="unset"
          bookBottom="unset"
          bookLeft="unset"
          vector={<Vector10 width={67} height={73} />}
          reflectionColor="#e5e5e5"
        />
        <Profile1
          state="active"
          profilePosition="relative"
          profileTop="unset"
          profileLeft="unset"
          onProfilePress={() => navigation.navigate("Profile2")}
          profileHeight="100%"
          profileRight="0%"
          profileBottom="0%"
          profileColor="#c99700"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    marginRight: -1,
    height: 224,
    width: Width.width_394,
  },
  bibleVersesWrapper: {
    width: 377,
    height: Height.height_150,
    paddingLeft: 17,
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
});

export default FrameComponent;
