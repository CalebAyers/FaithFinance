import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  Color,
  Height,
  Width,
  BoxShadow,
  Border,
  Padding,
  Gap,
  FontSize,
  FontFamily,
  LineHeight,
} from "../GlobalStyles";

export type TopSpendingType = {
  trendIcon?: React.ReactNode;
  topSpending?: string;
  education?: string;
  emptyValue?: string;

  /** Style props */
  topSpendingBorderColor?: string;
  topSpendingColor?: string;
  emptyValueColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopSpending = ({
  topSpendingBorderColor,
  trendIcon,
  topSpending,
  topSpendingColor,
  education,
  emptyValue,
  emptyValueColor,
}: TopSpendingType) => {
  const topSpendingStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", topSpendingBorderColor),
    };
  }, [topSpendingBorderColor]);

  const topSpending1Style = useMemo(() => {
    return {
      ...getStyleValue("color", topSpendingColor),
    };
  }, [topSpendingColor]);

  const emptyValueStyle = useMemo(() => {
    return {
      ...getStyleValue("color", emptyValueColor),
    };
  }, [emptyValueColor]);

  return (
    <View style={[styles.topSpending, topSpendingStyle]}>
      {trendIcon}
      <View style={styles.topSpendingInner}>
        <View style={styles.topSpendingParent}>
          <Text
            style={[
              styles.topSpending2,
              styles.educationFlexBox,
              topSpending1Style,
            ]}
          >
            {topSpending}
          </Text>
          <Text style={[styles.education, styles.educationFlexBox]}>
            {education}
          </Text>
          <Text
            style={[
              styles.emptyValue,
              styles.educationFlexBox,
              emptyValueStyle,
            ]}
          >
            {emptyValue}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  educationFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
  },
  topSpending: {
    height: Height.height_90,
    width: Width.width_170,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.mainRed,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.padding_4,
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_16,
    gap: Gap.gap_3,
    zIndex: 2,
  },
  topSpendingInner: {
    height: Height.height_62,
    paddingTop: Padding.padding_4,
    zIndex: 1,
    width: Width.width_88,
  },
  topSpendingParent: {
    height: Height.height_58,
    zIndex: 1,
    gap: Gap.gap_4_5,
    width: Width.width_88,
  },
  topSpending2: {
    fontSize: FontSize.fs_10,
    fontFamily: FontFamily.interRegular,
    zIndex: 3,
    lineHeight: LineHeight.lh_38,
    height: Height.height_12,
    width: Width.width_83,
    display: "flex",
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
  },
  education: {
    width: Width.width_91,
    height: Height.height_25,
    fontSize: FontSize.fs_14,
    lineHeight: LineHeight.lh_25,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    zIndex: 1,
  },
  emptyValue: {
    fontSize: FontSize.fs_12,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    lineHeight: LineHeight.lh_38,
    height: Height.height_12,
    width: Width.width_83,
    display: "flex",
    textAlign: "left",
    color: Color.vikafjellColorsGeneralLabels,
    zIndex: 2,
  },
});

export default TopSpending;
