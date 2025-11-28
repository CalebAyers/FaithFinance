import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import SpendingGivingIncome from "../components/SpendingGivingIncome";
import BibleVerses from "../components/BibleVerses";
import Pressed from "../components/Pressed";
import Transaction from "../components/Transaction";
import Vector3 from "../assets/Vector3.svg";
import Vector1 from "../assets/Vector1.svg";
import Home from "../components/Home";
import Vector from "../assets/Vector.svg";
import Dashboard from "../components/Dashboard";
import Vector8 from "../assets/Vector8.svg";
import Book from "../components/Book";
import Vector9 from "../assets/Vector9.svg";
import Profile from "../components/Profile";
import Vector11 from "../assets/Vector11.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import Vector5 from "../assets/Vector5.svg";
import {
  Color,
  LineHeight,
  FontSize,
  Height,
  Width,
  Padding,
  Gap,
  FontFamily,
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
                    <SpendingGivingIncome />
                  </View>
                  <BibleVerses />
                  <Pressed
                    state="Default"
                    addTransactionColor="#e1ad01"
                    state1="default"
                    addHeight="26"
                    addTop="50%"
                    addBottom="unset"
                    addMarginTop="-13"
                  />
                </View>
              </View>
              <Text
                style={[styles.recentTransactions, styles.faithfinanceTypo]}
              >
                Recent Transactions
              </Text>
              <View style={styles.transactions}>
                <View style={styles.incomeDisplayLayout}>
                  <Transaction
                    state="Giving"
                    transactionDetailColor="#000"
                    transactionDetailTextAlign="left"
                    transactionDetailDisplay="flex"
                    transactionDetailAlignItems="center"
                    secondTransactionDetailWidth={130}
                    category="Giving"
                    categoryWidth={40}
                    categoryColor="#e1ad01"
                    emptySpace="-$100.00"
                    emptySpaceColor="#e1ad01"
                    state1="default"
                    vector={<Vector3 width={89} height={89} />}
                  />
                </View>
                <View style={styles.incomeDisplayLayout}>
                  <View style={styles.transactionLayout}>
                    <Transaction
                      state="Giving"
                      transactionDetailColor="#000"
                      transactionDetailTextAlign="left"
                      transactionDetailDisplay="flex"
                      transactionDetailAlignItems="center"
                      secondTransactionDetailWidth={148}
                      category="Spending"
                      categoryWidth={58}
                      categoryColor="#720404"
                      emptySpace="-$100.00"
                      emptySpaceColor="#720404"
                      state1="default"
                      vector={<Vector1 width={89} height={89} />}
                    />
                  </View>
                </View>
                <View style={styles.transactionDisplay}>
                  <View
                    style={[
                      styles.homePageResetTransaction,
                      styles.transactionLayout,
                    ]}
                  >
                    <Transaction
                      state="Giving"
                      transactionDetailColor="#000"
                      transactionDetailTextAlign="left"
                      transactionDetailDisplay="flex"
                      transactionDetailAlignItems="center"
                      secondTransactionDetailWidth={148}
                      category="Spending"
                      categoryWidth={58}
                      categoryColor="#720404"
                      emptySpace="-$100.00"
                      emptySpaceColor="#720404"
                      state1="default"
                      vector={<Vector1 width={89} height={89} />}
                    />
                  </View>
                  <View style={[styles.navigationBarDefault, styles.barBg]}>
                    <View style={styles.iconLayout}>
                      <Home
                        state="default"
                        activePosition="absolute"
                        activeHeight="100%"
                        activeTop="0%"
                        activeRight="0%"
                        activeBottom="0%"
                        activeLeft="0%"
                        vector={<Vector width={67} height={73} />}
                        homeColor="#c99700"
                      />
                    </View>
                    <Image
                      style={styles.iconMoney3}
                      contentFit="cover"
                      source={require("../assets/active.png")}
                    />
                    <View style={styles.iconLayout}>
                      <Dashboard
                        state="default"
                        dashboardHeight="100%"
                        dashboardPosition="absolute"
                        dashboardTop="0%"
                        dashboardRight="0%"
                        dashboardBottom="0%"
                        dashboardLeft="0%"
                        vector={<Vector8 width={58} height={67} />}
                        insightsColor="#c99700"
                      />
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
                        vector={<Vector9 width={67} height={73} />}
                        reflectionColor="#c99700"
                      />
                    </View>
                    <View style={styles.iconLayout}>
                      <Profile
                        state="default"
                        profilePosition="absolute"
                        profileTop="0%"
                        profileLeft="0%"
                        profileHeight="100%"
                        profileRight="0%"
                        profileBottom="0%"
                        vector={<Vector11 width={83} height={83} />}
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
            <View style={[styles.incomeDisplay, styles.incomeDisplayLayout]}>
              <View style={styles.transactionLayout}>
                <Transaction
                  state="Giving"
                  transactionDetailColor="#000"
                  transactionDetailTextAlign="left"
                  transactionDetailDisplay="flex"
                  transactionDetailAlignItems="center"
                  secondTransactionDetailWidth={135}
                  category="Income"
                  categoryWidth={45}
                  categoryColor="#27ae60"
                  emptySpace="+$100.00"
                  emptySpaceColor="#27ae60"
                  state1="default"
                  vector={<Vector5 width={89} height={89} />}
                />
              </View>
            </View>
          </View>
          <View style={styles.expenseDisplay}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={130}
              category="Giving"
              categoryWidth={40}
              categoryColor="#e1ad01"
              emptySpace="-$100.00"
              emptySpaceColor="#e1ad01"
              state1="default"
              vector={<Vector3 width={89} height={89} />}
            />
          </View>
        </ScrollView>
        <View style={[styles.headerBarDefault, styles.barBg]}>
          <Text style={[styles.faithfinance, styles.faithfinanceTypo]}>
            FaithFinance
          </Text>
          <View style={[styles.homePageResetIconProfile, styles.iconLayout]}>
            <Profile
              state="default"
              profilePosition="absolute"
              profileTop="0%"
              profileLeft="0%"
              profileHeight="100%"
              profileRight="0%"
              profileBottom="0%"
              vector={<Vector11 width={83} height={83} />}
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
  transactionLayout: {
    height: Height.height_80,
    width: Width.width_360,
    flexDirection: "row",
  },
  barBg: {
    backgroundColor: Color.mainRed,
    flexDirection: "row",
  },
  incomeDisplayLayout: {
    paddingRight: Padding.padding_16,
    width: Width.width_376,
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
    paddingTop: 0,
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
    width: Width.width_377,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
    height: 360,
  },
  frameContainer: {
    zIndex: 1,
    gap: Gap.gap_30,
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
    color: Color.colorBlack,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  transactions: {
    height: 305,
    paddingRight: Padding.padding_1,
    gap: Gap.gap_20,
    alignItems: "flex-end",
    width: Width.width_394,
  },
  transactionDisplay: {
    marginRight: -1,
    height: 105,
    width: Width.width_394,
  },
  homePageResetTransaction: {
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
  incomeDisplay: {
    marginTop: -26,
  },
  expenseDisplay: {
    width: 374,
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
  homePageResetIconProfile: {
    top: 29,
    left: 349,
    zIndex: 1,
    position: "absolute",
  },
});

export default HomePageReset;
