import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SpendingGivingIncome from "../components/SpendingGivingIncome";
import BibleVerses from "../components/BibleVerses";
import AddTransaction from "../components/AddTransaction";
import Transaction from "../components/Transaction";
import Default from "../components/Default";
import IPhoneBezel from "../components/IPhoneBezel";
import Default1 from "../components/Default1";
import {
  Color,
  Height,
  Width,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const HomePage = () => {
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
                  <AddTransaction
                    state="Default"
                    state1="Default"
                    addTransaction="Add Transaction"
                    state2="default"
                  />
                </View>
              </View>
              <Text style={styles.recentTransactions}>Recent Transactions</Text>
              <View style={styles.transactionPairParent}>
                <View style={styles.transactionLayout}>
                  <Transaction
                    state="Giving"
                    category="Giving"
                    emptySpace="-$100.00"
                    state1="default"
                  />
                </View>
                <View style={styles.transactionLayout}>
                  <View style={styles.transactionLayout1}>
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
                    />
                  </View>
                </View>
                <View style={styles.transactionParent}>
                  <View
                    style={[styles.transaction2, styles.transactionLayout1]}
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
                    />
                  </View>
                  <Default
                    state="default"
                    state1="default"
                    state2="default"
                    state3="default"
                  />
                </View>
              </View>
              <IPhoneBezel
                type="iPhone 16"
                iPhone16={require("../assets/iPhone-16.png")}
              />
            </View>
            <View style={[styles.transactionWrapper, styles.transactionLayout]}>
              <View style={styles.transactionLayout1}>
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
                />
              </View>
            </View>
          </View>
          <View style={styles.transactionContainer}>
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
            />
          </View>
        </ScrollView>
        <Default1
          state="default"
          profilePosition="absolute"
          profileTop="29"
          profileLeft="349"
          profileHeight="32"
          profileRight="unset"
          profileBottom="unset"
          profileColor="#e5e5e5"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  componentsFrameContainerContent: {
    flexDirection: "column",
    paddingTop: 1,
    paddingRight: 1,
    paddingBottom: 173,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 20,
    height: 1201,
  },
  homePage: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  transactionLayout1: {
    height: Height.height_80,
    width: Width.width_360,
    flexDirection: "row",
  },
  transactionLayout: {
    paddingRight: Padding.padding_16,
    width: Width.width_376,
    justifyContent: "flex-end",
    height: Height.height_80,
    flexDirection: "row",
  },
  view: {
    width: "100%",
    height: 1200,
    overflow: "hidden",
    paddingTop: 0,
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
    zIndex: 3,
    gap: Gap.gap_30,
    width: Width.width_360,
    height: 360,
  },
  spendingGivingIncomeWrapper: {
    width: 350,
    height: Height.height_100,
    paddingLeft: Padding.padding_10,
    flexDirection: "row",
  },
  recentTransactions: {
    width: 343,
    height: Height.height_40,
    right: 23,
    bottom: 332,
    fontSize: FontSize.fs_18,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  transactionPairParent: {
    height: 305,
    paddingRight: Padding.padding_1,
    gap: Gap.gap_20,
    alignItems: "flex-end",
    width: Width.width_394,
  },
  transactionParent: {
    marginRight: -1,
    height: Height.height_105,
    width: Width.width_394,
  },
  transaction2: {
    top: 0,
    left: 17,
    position: "absolute",
  },
  transactionWrapper: {
    marginTop: -26,
  },
  transactionContainer: {
    width: 374,
    paddingRight: Padding.padding_14,
    justifyContent: "flex-end",
    height: Height.height_80,
    flexDirection: "row",
  },
});

export default HomePage;
