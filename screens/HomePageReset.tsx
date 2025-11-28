import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import SpendingGivingIncome from "../components/SpendingGivingIncome";
import BibleVerses from "../components/BibleVerses";
import Pressed from "../components/Pressed";
import Transaction from "../components/Transaction";
import Vector11 from "../assets/Vector11.svg";
import Vector9 from "../assets/Vector9.svg";
import Home from "../components/Home";
import Vector7 from "../assets/Vector7.svg";
import Dashboard from "../components/Dashboard";
import Book from "../components/Book";
import Vector6 from "../assets/Vector6.svg";
import Profile from "../components/Profile";
import Vector8 from "../assets/Vector8.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import Vector10 from "../assets/Vector10.svg";
import {
  Color,
  LineHeight,
  FontSize,
  Height,
  Width,
  Padding,
  FontFamily,
  Gap,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const HomePageReset = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <ScrollView
          style={styles.componentsFrame}
          contentContainerStyle={styles.componentsFrameContainerContent}
        >
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.frameWrapper}>
                <View style={styles.frameContainer}>
                  <View style={styles.spendingGivingIncomeWrapper}>
                    <SpendingGivingIncome
                      iconMoney2State="default"
                      iconMoney2State1="default"
                      iconMoney2State2="default"
                    />
                  </View>
                  <BibleVerses />
                  <Pressed
                    state="Default"
                    addTransaction="Add Transaction"
                    addTransactionBackgroundColor="#8b0000"
                    addTransactionBorderStyle="unset"
                    addTransactionBorderColor="unset"
                    addTransactionPosition="absolute"
                    addTransactionHeight="100%"
                    addTransactionTop="0%"
                    addTransactionRight="0%"
                    addTransactionBottom="0%"
                    addTransactionLeft="0%"
                    addTransactionAlignSelf="unset"
                    addTransactionColor="#e1ad01"
                    addTransactionWidth="129"
                    addTransactionFontSize={16}
                    state1="default"
                    addHeight="26"
                    addWidth="7.22%"
                    addTop="50%"
                    addBottom="unset"
                    addLeft="23.06%"
                    addMarginTop="-13"
                    vectorIconWidth="58.46%"
                    vectorIconRight="20.77%"
                    vectorIconLeft="20.77%"
                  />
                </View>
              </View>
              <Text
                style={[styles.recentTransactions, styles.faithfinanceTypo]}
              >
                Recent Transactions
              </Text>
              <View style={styles.transactionEntriesParent}>
                <View style={styles.transactionLayout}>
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
                </View>
                <View style={styles.transactionLayout}>
                  <View style={styles.transactionLayout1}>
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
                </View>
                <View style={styles.transactionParent}>
                  <View
                    style={[styles.transaction2, styles.transactionLayout1]}
                  >
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
                </View>
              </View>
              <IPhoneBezel
                type="iPhone 16"
                iPhoneBezelHeight={875}
                iPhone16={require("../assets/iPhone-16.png")}
              />
            </View>
            <View style={[styles.transactionWrapper, styles.transactionLayout]}>
              <View style={styles.transactionLayout1}>
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
            </View>
          </View>
          <View style={styles.transactionContainer}>
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
          </View>
        </ScrollView>
        <View style={[styles.headerBarDefault, styles.barBg]}>
          <Text style={[styles.faithfinance, styles.faithfinanceTypo]}>
            FaithFinance
          </Text>
          <View style={[styles.iconProfile2, styles.iconLayout]}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  componentsFrameContainerContent: {
    flexDirection: "column",
    paddingTop: 1,
    paddingRight: 1,
    paddingBottom: 48,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 20,
    height: 1076,
  },
  homePageReset: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  faithfinanceTypo: {
    textAlign: "left",
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_18,
  },
  transactionLayout1: {
    height: Height.height_80,
    width: Width.width_360,
    flexDirection: "row",
  },
  barBg: {
    backgroundColor: Color.mainRed,
    flexDirection: "row",
  },
  transactionLayout: {
    paddingRight: Padding.padding_16,
    width: 376,
    justifyContent: "flex-end",
    height: Height.height_80,
    flexDirection: "row",
  },
  iconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  view: {
    width: "100%",
    height: 1075,
    paddingTop: Padding.padding_0,
    overflow: "hidden",
  },
  componentsFrame: {
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: 394,
    width: Width.width_394,
    flex: 1,
  },
  frameParent: {
    height: 927,
    zIndex: null,
    alignItems: "flex-end",
    width: Width.width_393,
  },
  frameGroup: {
    height: 873,
    zIndex: 2,
    paddingTop: 119,
    paddingBottom: Padding.padding_21,
    gap: 68,
    width: Width.width_393,
  },
  frameWrapper: {
    width: 377,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
    height: 360,
  },
  frameContainer: {
    zIndex: 1,
    gap: 30,
    width: Width.width_360,
    height: 360,
  },
  spendingGivingIncomeWrapper: {
    width: 350,
    paddingLeft: Padding.padding_10,
    height: Height.height_100,
    flexDirection: "row",
  },
  recentTransactions: {
    width: 343,
    height: Height.height_40,
    right: 23,
    bottom: 332,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.vikafjellColorsGeneralLabels,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  transactionEntriesParent: {
    height: 305,
    paddingRight: Padding.padding_1,
    gap: Gap.gap_20,
    alignItems: "flex-end",
    width: Width.width_394,
  },
  transactionParent: {
    marginRight: -1,
    height: 105,
    width: Width.width_394,
  },
  transaction2: {
    top: 0,
    left: 17,
    position: "absolute",
  },
  navigationBarDefault: {
    top: 5,
    left: 0,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_20,
    gap: Gap.gap_45,
    position: "absolute",
    height: Height.height_100,
    width: Width.width_394,
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
  transactionWrapper: {
    marginTop: -26,
  },
  transactionContainer: {
    width: Width.width_374,
    paddingRight: Padding.padding_14,
    justifyContent: "flex-end",
    height: Height.height_80,
    flexDirection: "row",
  },
  headerBarDefault: {
    marginLeft: -3,
    width: Width.width_400,
    height: Height.height_90,
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_8,
    gap: Gap.gap_10,
    zIndex: 2,
    marginTop: -1075,
    alignItems: "center",
    overflow: "hidden",
  },
  faithfinance: {
    height: Height.height_47,
    width: Width.width_375,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    zIndex: 0,
  },
  iconProfile2: {
    top: 29,
    left: 349,
    zIndex: 1,
    position: "absolute",
  },
});

export default HomePageReset;
