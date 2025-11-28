import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Default from "../components/Default";
import SpendingReview from "../components/SpendingReview";
import TopSpending from "../components/TopSpending";
import Trendicon1 from "../assets/Trend-icon1.svg";
import TotalIncome from "../components/TotalIncome";
import Trendicon2 from "../assets/Trend-icon2.svg";
import TotalGiving from "../components/TotalGiving";
import Graphs from "../components/Graphs";
import Vector2 from "../assets/Vector2.svg";
import Group from "../assets/Group.svg";
import Default1 from "../components/Default1";
import IPhoneBezel from "../components/IPhoneBezel";
import CategoryBreakdown from "../components/CategoryBreakdown";
import ProgressBAr1 from "../assets/Progress-BAr.svg";
import BibleVerses from "../components/BibleVerses";
import { Width, Height, Padding, Color, Gap } from "../GlobalStyles";

const InsightPageYearly = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.insightPageYearly}
      contentContainerStyle={styles.insightPageYearlyContent}
    >
      <View style={styles.frameParent}>
        <View style={styles.headerBarDefaultParent}>
          <Default
            state="default"
            profileHeight="32"
            profileTop="29"
            profileLeft="349"
            profileRight="unset"
            profileBottom="unset"
            profilePosition="absolute"
            profileColor="#e5e5e5"
          />
          <View style={styles.frameGroup}>
            <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
              <View style={styles.spendingReviewParent}>
                <SpendingReview state="Yearly" />
                <View
                  style={[
                    styles.trendSummaryWrapper,
                    styles.trendWrapperLayout,
                  ]}
                >
                  <View
                    style={[styles.trendSummary, styles.trendWrapperLayout]}
                  >
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
                <View
                  style={[styles.totalGivingWrapper, styles.trendWrapperLayout]}
                >
                  <TotalGiving
                    onTotalGivingPress={() =>
                      navigation.navigate("AddToFavorite")
                    }
                  />
                </View>
              </View>
            </View>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <DropDownPicker
                style={[
                  styles.dropdownpicker,
                  styles.frameWrapperSpaceBlock,
                  styles.frameDropdowndropDownContainer,
                ]}
                open={frameDropdownOpen}
                setOpen={setFrameDropdownOpen}
                value={frameDropdownValue}
                setValue={setFrameDropdownValue}
                placeholder="Select Graph Type..."
                items={[]}
                labelStyle={styles.frameDropdownValue}
                placeholderStyle={styles.frameDropdownValue}
                dropdownContainerStyle={styles.frameDropdowndropDownContent}
                zIndex={5000}
                zIndexInverse={0}
                dropDownDirection={"BOTTOM"}
              />
            </View>
            <View style={[styles.graphs1Wrapper, styles.wrapperFlexBox]}>
              <Graphs
                state="Pie Chart"
                vector={
                  <Vector2 width={Width.width_320} height={Height.height_225} />
                }
                vector2={{ uri: "pending_I407:3100;149:137" }}
                group={<Group width={175} height={175} />}
              />
            </View>
            <Default1
              iconMoney3={require("../assets/Icon-money-32.png")}
              state="default"
              home2Height="32"
              home2Position="relative"
              home2Top="unset"
              home2Right="unset"
              home2Bottom="unset"
              home2Left="unset"
              homeColor="#e5e5e5"
              state1="default"
              state2="default"
              bookHeight="32"
              bookPosition="relative"
              bookTop="unset"
              bookRight="unset"
              bookBottom="unset"
              bookLeft="unset"
              reflectionColor="#e5e5e5"
              state3="default"
              profileHeight="32"
              profileTop="unset"
              profileLeft="unset"
              profileRight="unset"
              profileBottom="unset"
              profilePosition="relative"
              profileColor="#e5e5e5"
            />
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
      <View style={[styles.bibleVersesModule, styles.wrapperFlexBox]}>
        <BibleVerses
          onBibleVersesPress={() => navigation.navigate("AddToFavorite")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#000",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "200",
    fontFamily: "Inter-ExtraLight",
  },
  frameDropdowndropDownContainer: {
    paddingRight: 14,
    paddingBottom: 15,
    minHeight: 51,
    height: 51,
    borderWidth: 1,
    borderColor: "#d4af37",
    borderRadius: 12,
  },
  frameDropdowndropDownContent: {
    borderColor: "#d4af37",
    borderWidth: 1,
    borderRadius: 12,
  },
  insightPageYearlyContent: {
    flexDirection: "column",
    paddingBottom: 155,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 25,
    height: 1297,
    flex: 1,
  },
  frameWrapperSpaceBlock: {
    paddingBottom: Padding.padding_15,
    paddingRight: Padding.padding_14,
  },
  trendWrapperLayout: {
    height: Height.height_90,
    flexDirection: "row",
  },
  wrapperFlexBox: {
    width: Width.width_374,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  insightPageYearly: {
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
    width: Width.width_400,
    paddingHorizontal: Padding.padding_3,
    paddingVertical: Padding.padding_0,
    zIndex: 1,
    height: Height.height_852,
  },
  frameGroup: {
    alignItems: "flex-end",
    paddingTop: 105,
    gap: Gap.gap_10,
    marginTop: -90,
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
  trendSummaryWrapper: {
    width: Width.width_360,
    paddingLeft: Padding.padding_3,
    zIndex: null,
  },
  trendSummary: {
    width: Width.width_357,
    gap: Gap.gap_17,
    zIndex: 1,
  },
  totalGivingWrapper: {
    paddingLeft: Padding.padding_4,
    width: Width.width_364,
  },
  wrapper: {
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
  categoryBreakdownWrapper: {
    width: 366,
    height: Height.height_200,
    paddingLeft: Padding.padding_6,
    marginTop: -85,
    flexDirection: "row",
  },
  bibleVersesModule: {
    height: Height.height_150,
    paddingRight: Padding.padding_14,
    width: Width.width_374,
  },
});

export default InsightPageYearly;
