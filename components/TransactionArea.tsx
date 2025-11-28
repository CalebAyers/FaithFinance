import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ContentArea from "./ContentArea";
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
  Width,
  Height,
  Padding,
  Gap,
  BoxShadow,
  Border,
  Color,
} from "../GlobalStyles";

const TransactionArea = () => {
  return (
    <View style={styles.transactionArea}>
      <ContentArea state="Spending" frameViewBackgroundColor="#8b0000" />
      <View style={styles.navigationBarDefault}>
        <Home
          state="default"
          activePosition="relative"
          activeHeight={32}
          activeTop="unset"
          activeRight="unset"
          activeBottom="unset"
          activeLeft="unset"
          homeColor="#e5e5e5"
          vector={<Vector12 width={67} height={73} />}
        />
        <Image
          style={styles.iconMoney3}
          contentFit="cover"
          source={require("../assets/active.png")}
        />
        <Dashboard
          state="default"
          dashboardHeight={32}
          dashboardPosition="relative"
          dashboardTop="unset"
          dashboardRight="unset"
          dashboardBottom="unset"
          dashboardLeft="unset"
          insightsColor="#e5e5e5"
          vector={<Vector4 width={58} height={67} />}
        />
        <Book
          state="default"
          bookHeight={32}
          bookPosition="relative"
          bookTop="unset"
          bookRight="unset"
          bookBottom="unset"
          bookLeft="unset"
          reflectionColor="#e5e5e5"
          vector={<Vector2 width={67} height={73} />}
        />
        <Profile
          state="default"
          profilePosition="relative"
          profileTop="unset"
          profileLeft="unset"
          profileHeight={32}
          profileRight="unset"
          profileBottom="unset"
          profileColor="#e5e5e5"
          vector={<Vector7 width={83} height={83} />}
        />
      </View>
      <IPhoneBezel
        type="iPhone 16"
        iPhoneBezelHeight={854}
        iPhone16={require("../assets/iPhone-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionArea: {
    width: Width.width_393,
    height: Height.height_852,
    paddingTop: Padding.padding_117,
    gap: Gap.gap_524,
    marginTop: -90,
  },
  navigationBarDefault: {
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
    zIndex: 1,
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default TransactionArea;
