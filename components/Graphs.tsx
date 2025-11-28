import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import {
  Color,
  Height,
  Width,
  FontFamily,
  FontSize,
  BoxShadow,
  Border,
  Padding,
  Gap,
  LineHeight,
} from "../GlobalStyles";

export type GraphsType = {
  vector?: React.ReactNode;
  vector2?: React.ReactNode;
  group?: React.ReactNode;

  /** Variant props */
  state?: string;
};

const Graphs = ({
  state = "Line Chart",
  vector,
  vector2,
  group,
}: GraphsType) => {
  return (
    <View style={[styles.graphs1, styles.pieBg]}>
      <View style={styles.spendingByCategoryPieChaWrapper}>
        <Text style={styles.spendingByCategory}>
          Spending by Category - Pie Chart
        </Text>
      </View>
      <View style={[styles.pieChart, styles.pieLayout]}>
        <View style={[styles.pieChart2, styles.pieLayout]}>
          {vector}
          <Image style={styles.vectorIcon2} contentFit="cover" />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={vector2}
          />
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            {group}
            <View style={[styles.frameWrapper, styles.groupParentLayout]}>
              <View style={styles.textParent}>
                <Text style={[styles.text, styles.textTypo]} />
                <Text style={[styles.text2, styles.textTypo]} />
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.income40Wrapper}>
              <Text style={[styles.income40, styles.spent20Typo]}>
                Income 40%
              </Text>
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.spent20Wrapper}>
                <Text style={[styles.spent20, styles.spent20Typo]}>
                  Spent 20%
                </Text>
              </View>
              <Text style={[styles.giving40, styles.spent20Typo]}>
                Giving 40%
              </Text>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text3} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pieBg: {
    overflow: "hidden",
    backgroundColor: Color.componentsBackgrounf,
  },
  pieLayout: {
    height: Height.height_225,
    width: Width.width_320,
  },
  groupParentLayout: {
    width: Width.width_160,
    height: Height.height_20_4,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  spent20Typo: {
    fontSize: FontSize.fs_14,
    height: Height.height_17,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  graphs1: {
    height: Height.height_300,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    borderRadius: Border.br_12,
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_16,
    gap: Gap.gap_5,
  },
  spendingByCategoryPieChaWrapper: {
    width: 296,
    paddingLeft: Padding.padding_2,
    flexDirection: "row",
    height: Height.height_38,
  },
  spendingByCategory: {
    width: 297,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.vikafjellColorsGeneralLabels,
    height: Height.height_38,
  },
  pieChart: {
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.componentsBackgrounf,
  },
  pieChart2: {
    paddingTop: 10,
    paddingRight: Padding.padding_0,
    paddingBottom: Padding.padding_12,
    gap: 11,
    overflow: "hidden",
    backgroundColor: Color.componentsBackgrounf,
  },
  vectorIcon2: {
    width: Width.width_270,
    height: Height.height_195,
    display: "none",
  },
  groupParent: {
    height: Height.height_20_4,
  },
  frameWrapper: {
    paddingLeft: 160,
    zIndex: 1,
    height: Height.height_20_4,
  },
  textParent: {
    gap: 5,
    width: Width.width_0,
    height: Height.height_20_4,
  },
  text: {
    fontSize: 19,
    height: Height.height_0,
    width: Width.width_0,
    color: Color.vikafjellColorsGeneralLabels,
    textAlign: "center",
  },
  text2: {
    width: Width.width_3,
    height: Height.height_15,
    fontSize: 13,
    color: Color.vikafjellColorsGeneralAxisTitles,
  },
  frameParent: {
    width: 337,
    gap: 118,
    zIndex: 7,
    height: Height.height_159,
    flexDirection: "row",
  },
  income40Wrapper: {
    width: Width.width_100,
    height: 21,
    paddingTop: Padding.padding_4,
  },
  income40: {
    width: Width.width_103,
    color: Color.successColor,
  },
  frameGroup: {
    gap: 125,
    width: Width.width_119,
    height: Height.height_159,
  },
  spent20Wrapper: {
    paddingLeft: Padding.padding_17,
    width: Width.width_119,
    height: Height.height_17,
    flexDirection: "row",
  },
  spent20: {
    width: 105,
    color: Color.mainRed,
  },
  giving40: {
    width: 92,
    color: Color.gOLD3,
  },
  textWrapper: {
    width: 25,
    paddingLeft: 25,
    zIndex: 6,
    height: Height.height_0,
    flexDirection: "row",
  },
  text3: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.interRegular,
    height: Height.height_0,
    width: Width.width_0,
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
  },
});

export default Graphs;
