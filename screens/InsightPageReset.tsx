import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import Profile from "../components/Profile";
import Vector8 from "../assets/Vector8.svg";
import SpendingReview from "../components/SpendingReview";
import TopSpending from "../components/TopSpending";
import Trendicon1 from "../assets/Trend-icon1.svg";
import TotalIncome from "../components/TotalIncome";
import Trendicon2 from "../assets/Trend-icon2.svg";
import TotalGiving from "../components/TotalGiving";
import Graphs from "../components/Graphs";
import Vector2 from "../assets/Vector2.svg";
import Group from "../assets/Group.svg";
import Home from "../components/Home";
import Vector7 from "../assets/Vector7.svg";
import Dashboard from "../components/Dashboard";
import Book from "../components/Book";
import Vector6 from "../assets/Vector6.svg";
import IPhoneBezel from "../components/IPhoneBezel";
import CategoryBreakdown from "../components/CategoryBreakdown";
import ProgressBAr1 from "../assets/Progress-BAr.svg";
import BibleVerses from "../components/BibleVerses";
import {
  Width,
  Height,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const InsightPageReset = () => {
  const [graphMenuOpen, setGraphMenuOpen] = useState(false);
  const [graphMenuValue, setGraphMenuValue] = useState();

  return (
    <ScrollView
      style={styles.insightPageReset}
      contentContainerStyle={styles.insightPageResetContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.headerBarDefaultParent}>
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
          <View style={styles.frameGroup}>
            <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
              <View style={styles.spendingReviewParent}>
                <SpendingReview state="Weekly" />
                <View style={styles.spendingTrendsWrapper}>
                  <View style={styles.spendingTrends}>
                    <TopSpending
                      topSpendingBorderColor="#8b0000"
                      trendIcon={
                        <Trendicon1
                          width={Width.width_24}
                          height={Height.height_24}
                        />
                      }
                      topSpending="Top Spending"
                      topSpendingColor="#000"
                      education="Education"
                      emptyValue="$180.00"
                      emptyValueColor="#000"
                    />
                    <TotalIncome
                      trendIcon={
                        <Trendicon2
                          width={Width.width_24}
                          height={Height.height_24}
                        />
                      }
                      topSpending="Income"
                      education="Income"
                      emptyValue="$1,000.00"
                      topSpendingBorderColor="#27ae60"
                      topSpendingColor="#27ae60"
                      emptyValueColor="#27ae60"
                    />
                  </View>
                </View>
                <View style={styles.totalGivingWrapper}>
                  <TotalGiving />
                </View>
              </View>
            </View>
            <View style={[styles.graphMenu, styles.graphMenuFlexBox]}>
              <DropDownPicker
                style={[
                  styles.dropdownpicker,
                  styles.frameWrapperSpaceBlock,
                  styles.graphMenudropDownContainer,
                ]}
                open={graphMenuOpen}
                setOpen={setGraphMenuOpen}
                value={graphMenuValue}
                setValue={setGraphMenuValue}
                placeholder="Select Graph Type..."
                items={[]}
                labelStyle={styles.graphMenuValue}
                placeholderStyle={styles.graphMenuValue}
                dropdownContainerStyle={styles.graphMenudropDownContent}
                zIndex={5000}
                zIndexInverse={0}
                dropDownDirection={"BOTTOM"}
              />
            </View>
            <View style={[styles.graphs1Wrapper, styles.graphMenuFlexBox]}>
              <Graphs
                state="Pie Chart"
                vector={
                  <Vector2 width={Width.width_320} height={Height.height_225} />
                }
                vector2={{ uri: "pending_I403:1991;149:137" }}
                group={<Group width={175} height={175} />}
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
          </View>
        </View>
        <View style={styles.categoryBreakdownWrapper}>
          <CategoryBreakdown
            progressBAr={<ProgressBAr1 width={100} height={Height.height_8} />}
          />
        </View>
      </View>
      <View style={[styles.verseQuote, styles.graphMenuFlexBox]}>
        <BibleVerses />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  graphMenuValue: {
    color: "#000",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: "Inter-ExtraLight",
  },
  graphMenudropDownContainer: {
    paddingRight: 14,
    paddingBottom: 15,
    minHeight: 51,
    height: 51,
    borderWidth: 1,
    borderColor: "#d4af37",
    borderRadius: 12,
  },
  graphMenudropDownContent: {
    borderColor: "#d4af37",
    borderWidth: 1,
    borderRadius: 12,
  },
  insightPageResetContent: {
    flexDirection: "column",
    paddingBottom: 155,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 25,
    height: 1297,
    flex: 1,
  },
  barBg: {
    overflow: "hidden",
    backgroundColor: Color.mainRed,
    flexDirection: "row",
  },
  iconLayout: {
    width: Width.width_32,
    height: Height.height_32,
  },
  frameWrapperSpaceBlock: {
    paddingBottom: Padding.padding_15,
    paddingRight: Padding.padding_14,
  },
  graphMenuFlexBox: {
    width: Width.width_374,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  insightPageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  frameParent: {
    height: 967,
    paddingLeft: Padding.padding_13,
    zIndex: null,
    width: Width.width_393,
  },
  headerBarDefaultParent: {
    paddingHorizontal: Padding.padding_3,
    paddingVertical: Padding.padding_0,
    zIndex: 1,
    height: Height.height_852,
    width: Width.width_400,
  },
  headerBarDefault: {
    marginLeft: -3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_8,
    zIndex: 1,
    gap: Gap.gap_10,
    flexDirection: "row",
    height: Height.height_90,
    width: Width.width_400,
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
  frameGroup: {
    alignItems: "flex-end",
    paddingTop: 105,
    marginTop: -90,
    gap: Gap.gap_10,
    height: Height.height_852,
    width: Width.width_393,
  },
  frameWrapper: {
    width: 378,
    height: 266,
    justifyContent: "flex-end",
    paddingBottom: Padding.padding_15,
    flexDirection: "row",
  },
  spendingReviewParent: {
    height: 251,
    gap: Gap.gap_14,
    width: Width.width_364,
  },
  spendingTrendsWrapper: {
    width: Width.width_360,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
    height: Height.height_90,
    zIndex: null,
  },
  spendingTrends: {
    width: Width.width_357,
    gap: Gap.gap_17,
    flexDirection: "row",
    height: Height.height_90,
    zIndex: 1,
  },
  totalGivingWrapper: {
    paddingLeft: Padding.padding_4,
    width: Width.width_364,
    flexDirection: "row",
    height: Height.height_90,
  },
  graphMenu: {
    height: 51,
  },
  dropdownpicker: {
    minHeight: 51,
    height: 51,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod100,
    borderRadius: 12,
  },
  graphs1Wrapper: {
    height: Height.height_300,
    paddingRight: Padding.padding_14,
    width: Width.width_374,
  },
  navigationBarDefault: {
    marginRight: -1,
    width: Width.width_394,
    height: Height.height_100,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    justifyContent: "center",
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_45,
    zIndex: 3,
    flexDirection: "row",
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
  categoryBreakdownWrapper: {
    width: 366,
    height: Height.height_200,
    paddingLeft: Padding.padding_6,
    marginTop: -85,
    flexDirection: "row",
  },
  verseQuote: {
    height: Height.height_150,
    paddingRight: Padding.padding_14,
    width: Width.width_374,
  },
});

export default InsightPageReset;
