import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Money from "./Money";
import Vector11 from "../assets/Vector11.svg";
import {
  LineHeight,
  FontSize,
  Height,
  Color,
  FontFamily,
  Width,
  Gap,
  BoxShadow,
  Border,
  Padding,
} from "../GlobalStyles";

export type GivingGoalType = {
  iconMoney2State?: string;
  iconMoney2State1?: string;
};

const GivingGoal = ({ iconMoney2State, iconMoney2State1 }: GivingGoalType) => {
  return (
    <View style={styles.givingGoal}>
      <View style={styles.giving}>
        <View style={styles.moneyDetails}>
          <Money
            state={iconMoney2State}
            vector={<Vector11 width={89} height={89} />}
          />
        </View>
        <Text style={[styles.given, styles.givenLayout]}>Given</Text>
        <Text style={[styles.separator, styles.textLayout]}>$200.00</Text>
      </View>
      <View style={styles.giving}>
        <View style={styles.moneyDetails}>
          <Money
            state={iconMoney2State1}
            vector={<Vector11 width={89} height={89} />}
          />
        </View>
        <Text style={[styles.income, styles.textFlexBox]}>Giving Goal</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$2,245.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  givenLayout: {
    zIndex: 1,
    lineHeight: LineHeight.lh_28,
    fontSize: FontSize.fs_12,
    height: Height.height_28,
  },
  textLayout: {
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_16,
    height: Height.height_19,
  },
  textFlexBox: {
    color: Color.gOLD3,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_173,
  },
  givingGoal: {
    width: Width.width_360,
    gap: Gap.gap_20,
    flexDirection: "row",
    height: Height.height_100,
  },
  giving: {
    width: Width.width_170,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.gOLD3,
    borderWidth: 1,
    overflow: "hidden",
    paddingTop: Padding.padding_4,
    paddingBottom: Padding.padding_10,
    height: Height.height_100,
  },
  moneyDetails: {
    width: Width.width_104,
    height: Height.height_39,
    paddingLeft: Padding.padding_65,
    zIndex: 2,
    flexDirection: "row",
  },
  given: {
    color: Color.vikafjellColorsGeneralLabels,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_173,
  },
  separator: {
    color: Color.colorDarkslategray,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_173,
  },
  income: {
    zIndex: 1,
    lineHeight: LineHeight.lh_28,
    fontSize: FontSize.fs_12,
    height: Height.height_28,
  },
  text: {
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_16,
    height: Height.height_19,
  },
});

export default GivingGoal;
