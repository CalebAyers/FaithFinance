import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Profile from "../components/Profile";
import Vector8 from "../assets/Vector8.svg";
import FrameComponent2 from "../components/FrameComponent2";
import Home from "../components/Home";
import Vector7 from "../assets/Vector7.svg";
import Dashboard from "../components/Dashboard";
import Book from "../components/Book";
import Vector6 from "../assets/Vector6.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import Transaction from "../components/Transaction";
import Vector10 from "../assets/Vector10.svg";
import Vector9 from "../assets/Vector9.svg";
import Vector11 from "../assets/Vector11.svg";
import {
  Height,
  Width,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const TransactionPageReset = () => {
  return (
    <ScrollView
      style={styles.transactionPageReset}
      contentContainerStyle={styles.transactionPageResetContent}
    >
      <View style={[styles.headerBarDefaultParent, styles.parentLayout]}>
        <View style={[styles.headerBarDefault, styles.barBg]}>
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
        <View style={[styles.frameParent, styles.parentLayout]}>
          <FrameComponent2 />
          <View style={[styles.navigationBarDefault, styles.barBg]}>
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
              source={require("../assets/active.png")}
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
        </View>
      </View>
      <View style={styles.transactionContainerWrapper}>
        <ScrollView
          style={styles.transactionContainer}
          contentContainerStyle={styles.transactionContainerContent}
        >
          <View style={[styles.transaction, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              category="Income"
              prop="+$100.00"
              state1="default"
              vector={<Vector10 width={89} height={89} />}
            />
          </View>
          <View style={[styles.transaction, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              prop="+$100.00"
              textColor="#27ae60"
              state1="default"
              vector={<Vector10 width={89} height={89} />}
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              prop="+$100.00"
              textColor="#27ae60"
              state1="default"
              vector={<Vector10 width={89} height={89} />}
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              prop="-$100.00"
              textColor="#720404"
              state1="default"
              vector={<Vector9 width={89} height={89} />}
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              prop="-$100.00"
              textColor="#720404"
              state1="default"
              vector={<Vector9 width={89} height={89} />}
            />
          </View>
          <Transaction
            state="Giving"
            frameViewWidth={130}
            category="Giving"
            categoryWidth={40}
            categoryColor="#e1ad01"
            prop="-$100.00"
            textColor="#e1ad01"
            state1="default"
            vector={<Vector11 width={89} height={89} />}
          />
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              prop="-$100.00"
              textColor="#720404"
              state1="default"
              vector={<Vector9 width={89} height={89} />}
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              prop="-$100.00"
              textColor="#720404"
              state1="default"
              vector={<Vector9 width={89} height={89} />}
            />
          </View>
          <Transaction
            state="Giving"
            frameViewWidth={130}
            category="Giving"
            categoryWidth={40}
            categoryColor="#e1ad01"
            prop="-$100.00"
            textColor="#e1ad01"
            state1="default"
            vector={<Vector11 width={89} height={89} />}
          />
          <View style={[styles.transaction, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              frameViewWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              prop="-$100.00"
              textColor="#720404"
              state1="default"
              vector={<Vector9 width={89} height={89} />}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  transactionContainerContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 33,
    height: 1046,
  },
  transactionPageResetContent: {
    flexDirection: "column",
    paddingBottom: 209,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 1503,
    flex: 1,
  },
  parentLayout: {
    height: Height.height_852,
    width: Width.width_393,
  },
  barBg: {
    overflow: "hidden",
    backgroundColor: Color.mainRed,
    zIndex: 1,
    flexDirection: "row",
  },
  iconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  transactionLayout: {
    height: Height.height_80,
    flexDirection: "row",
  },
  transactionPageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: "100%",
    flex: 1,
  },
  headerBarDefaultParent: {
    zIndex: 1,
  },
  headerBarDefault: {
    marginLeft: -3,
    width: Width.width_400,
    height: Height.height_90,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_8,
    gap: Gap.gap_10,
    zIndex: 1,
    flexDirection: "row",
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
    position: "absolute",
    top: 29,
    left: 349,
    zIndex: 1,
  },
  frameParent: {
    paddingTop: 117,
    gap: 524,
    marginTop: -90,
  },
  navigationBarDefault: {
    width: Width.width_394,
    height: Height.height_100,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
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
  transactionContainerWrapper: {
    width: 376,
    height: 1046,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_16,
    marginTop: -604,
    flexDirection: "row",
  },
  transactionContainer: {
    maxWidth: 360,
    width: Width.width_360,
    flex: 1,
  },
  transaction: {
    alignSelf: "stretch",
  },
  transaction3: {
    width: Width.width_360,
  },
});

export default TransactionPageReset;
