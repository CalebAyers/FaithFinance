import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Trendicon from "../assets/Trend-icon.svg";
import {
  Height,
  Width,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type TotalGivingType = {
  /** Action props */
  onTotalGivingPress?: () => void;
};

const TotalGiving = ({ onTotalGivingPress }: TotalGivingType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.totalGiving} onPress={onTotalGivingPress}>
      <View style={styles.trendIconParent}>
        <Trendicon
          style={styles.trendIcon}
          width={Width.width_32}
          height={Height.height_32}
        />
        <View style={styles.givingWrapper}>
          <Text style={[styles.giving, styles.textFlexBox]}>Total Giving</Text>
        </View>
      </View>
      <Text style={[styles.text, styles.textFlexBox]}>$200.00</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  totalGiving: {
    height: Height.height_90,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.gOLD3,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.padding_5,
    paddingTop: Padding.padding_29,
    paddingBottom: Padding.padding_20,
    flexDirection: "row",
  },
  trendIconParent: {
    width: 260,
    gap: Gap.gap_17,
    zIndex: 2,
    height: Height.height_41,
    flexDirection: "row",
  },
  trendIcon: {
    height: Height.height_32,
    width: Width.width_32,
    zIndex: 2,
  },
  givingWrapper: {
    width: 211,
    paddingTop: Padding.padding_3,
    zIndex: 1,
    height: Height.height_41,
  },
  giving: {
    width: 214,
    height: Height.height_38,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "left",
  },
  text: {
    height: 33,
    width: 75,
    fontSize: FontSize.fs_14,
    lineHeight: 33,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.vikafjellColorsGeneralLabels,
    textAlign: "right",
    justifyContent: "flex-end",
    zIndex: 1,
  },
});

export default TotalGiving;
