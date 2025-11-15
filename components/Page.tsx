import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Default1 from "./Default1";
import TransactionType from "./TransactionType";
import AddTransaction from "./AddTransaction";
import Home from "./Home";
import Vector12 from "../assets/Vector12.svg";
import Dashboard from "./Dashboard";
import Vector4 from "../assets/Vector4.svg";
import Book from "./Book";
import Vector2 from "../assets/Vector2.svg";
import Profile from "./Profile";
import Vector7 from "../assets/Vector7.svg";
import IPhoneBezel from "./IPhoneBezel";
import {
  Height,
  Width,
  Padding,
  Gap,
  BoxShadow,
  Border,
  Color,
} from "../GlobalStyles";

const Page = () => {
  return (
    <View style={[styles.page, styles.pageLayout]}>
      <Default1
        defaultMarginTop="unset"
        state="default"
        profilePosition="absolute"
        profileTop="29"
        profileLeft="349"
        profileHeight="32"
        profileRight="unset"
        profileBottom="unset"
        profileColor="#e5e5e5"
      />
      <View style={[styles.frameParent, styles.pageLayout]}>
        <View style={styles.frameWrapper}>
          <View style={styles.transactionTypeParent}>
            <TransactionType
              state="Spending"
              frameViewBackgroundColor="#b36c6c"
              frameViewBackgroundColor1="#8b0000"
            />
            <AddTransaction />
          </View>
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
            vector={<Vector12 width={67} height={73} />}
            homeColor="#e5e5e5"
          />
          <Image
            style={styles.iconMoney3}
            contentFit="cover"
            source={require("../assets/active1.png")}
          />
          <Dashboard
            state="default"
            dashboardHeight={32}
            dashboardPosition="relative"
            dashboardTop="unset"
            dashboardRight="unset"
            dashboardBottom="unset"
            dashboardLeft="unset"
            vector={<Vector4 width={58} height={67} />}
            insightsColor="#e5e5e5"
          />
          <Book
            state="default"
            bookHeight={32}
            bookPosition="relative"
            bookTop="unset"
            bookRight="unset"
            bookBottom="unset"
            bookLeft="unset"
            vector={<Vector2 width={67} height={73} />}
            reflectionColor="#e5e5e5"
          />
          <Profile
            state="default"
            profilePosition="relative"
            profileTop="unset"
            profileLeft="unset"
            profileHeight={32}
            profileRight="unset"
            profileBottom="unset"
            vector={<Vector7 width={83} height={83} />}
            profileColor="#e5e5e5"
          />
        </View>
        <IPhoneBezel
          type="iPhone 16"
          iPhoneBezelHeight={854}
          iPhone16={require("../assets/iPhone-16.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageLayout: {
    height: Height.height_852,
    width: Width.width_393,
  },
  page: {
    zIndex: 1,
  },
  frameParent: {
    paddingTop: Padding.padding_117,
    gap: Gap.gap_524,
    marginTop: -90,
  },
  frameWrapper: {
    width: Width.width_377,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
    height: Height.height_111,
  },
  transactionTypeParent: {
    width: Width.width_360,
    zIndex: 2,
    gap: Gap.gap_18,
    height: Height.height_111,
  },
  navigationBarDefault: {
    width: Width.width_394,
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
    zIndex: 1,
    flexDirection: "row",
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default Page;
