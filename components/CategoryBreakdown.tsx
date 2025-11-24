import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import {
  Padding,
  FontSize,
  LineHeight,
  MaxWidth,
  Border,
  Height,
  Color,
  Width,
  BoxShadow,
  Gap,
  FontFamily,
} from "../GlobalStyles";

export type CategoryBreakdownType = {
  progressBAr?: React.ReactNode;
};

const CategoryBreakdown = ({ progressBAr }: CategoryBreakdownType) => {
  return (
    <View style={[styles.categoryBreakdown, styles.rowSpaceBlock]}>
      <Text style={[styles.categoryBreakdown2, styles.rowFlexBox]}>
        Category Breakdown
      </Text>
      <View style={[styles.categoryRow, styles.rowFlexBox]}>
        <View style={[styles.row, styles.rowFlexBox]}>
          <Text style={[styles.education, styles.givingTypo]}>Education</Text>
          <Text style={[styles.rowSeparators, styles.givingTypo]}>$180.00</Text>
        </View>
        <View style={[styles.progressBar, styles.progressLayout1]}>
          <View style={[styles.progressBarChild, styles.progressLayout]} />
        </View>
      </View>
      <View style={[styles.categoryRow, styles.rowFlexBox]}>
        <View style={[styles.row, styles.rowFlexBox]}>
          <Text style={[styles.giving, styles.givingTypo]}>Giving</Text>
          <Text style={[styles.rowSeparators, styles.givingTypo]}>$200.00</Text>
        </View>
        {progressBAr}
      </View>
      <View style={[styles.categoryRow, styles.rowFlexBox]}>
        <View style={[styles.row, styles.rowFlexBox]}>
          <Text style={[styles.income, styles.givingTypo]}>Income</Text>
          <Text style={[styles.rowSeparators, styles.givingTypo]}>$400.00</Text>
        </View>
        <View style={[styles.progressBar, styles.progressLayout1]}>
          <View style={styles.progressBarItem} />
        </View>
      </View>
      <View style={[styles.categoryRow, styles.rowFlexBox]}>
        <View style={[styles.row, styles.rowFlexBox]}>
          <Text style={[styles.education, styles.givingTypo]}>
            Transportation
          </Text>
          <Text style={[styles.rowSeparators, styles.givingTypo]}>$80.00</Text>
        </View>
        <View style={[styles.progressBar, styles.progressLayout1]}>
          <View style={[styles.progressBarInner, styles.progressLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowSpaceBlock: {
    paddingVertical: Padding.padding_0,
    overflow: "hidden",
  },
  rowFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  givingTypo: {
    fontSize: FontSize.fs_12,
    textAlign: "left",
    lineHeight: LineHeight.lh_38,
  },
  progressLayout1: {
    maxWidth: MaxWidth.max_w_326,
    width: "100%",
    borderRadius: Border.br_4,
    height: Height.height_8,
    overflow: "hidden",
  },
  progressLayout: {
    backgroundColor: Color.mainRed,
    borderRadius: Border.br_4,
    height: Height.height_8,
  },
  categoryBreakdown: {
    height: Height.height_200,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    paddingHorizontal: Padding.padding_17,
    gap: Gap.gap_2,
  },
  categoryBreakdown2: {
    height: Height.height_48,
    fontSize: FontSize.fs_16,
    display: "flex",
    textAlign: "left",
    lineHeight: LineHeight.lh_38,
    alignItems: "center",
    color: Color.vikafjellColorsGeneralLabels,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  categoryRow: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  row: {
    height: Height.height_23,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_2,
    gap: Gap.gap_20,
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: Padding.padding_0,
    overflow: "hidden",
  },
  education: {
    color: Color.vikafjellColorsGeneralLabels,
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  rowSeparators: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.vikafjellColorsGeneralLabels,
    fontSize: FontSize.fs_12,
  },
  progressBar: {
    backgroundColor: Color.colorGainsboro,
  },
  progressBarChild: {
    width: 150,
  },
  giving: {
    color: Color.gOLD3,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  income: {
    color: Color.successColor,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  progressBarItem: {
    width: 287,
    backgroundColor: Color.successColor,
    borderRadius: Border.br_4,
    height: Height.height_8,
  },
  progressBarInner: {
    width: 73,
  },
});

export default CategoryBreakdown;
