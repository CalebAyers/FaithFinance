import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Money from "./Money";
import Vector9 from "../assets/Vector9.svg";
import Vector11 from "../assets/Vector11.svg";
import Vector10 from "../assets/Vector10.svg";
import {
  FontFamily,
  Width,
  Gap,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  FontSize,
  LineHeight,
} from "../GlobalStyles";

export type SpendingGivingIncomeType = {
  iconMoney2State?: string;
  iconMoney2State1?: string;
  iconMoney2State2?: string;
};

const SpendingGivingIncome = ({
  iconMoney2State,
  iconMoney2State1,
  iconMoney2State2,
}: SpendingGivingIncomeType) => {
  return (
    <View style={styles.spendingGivingIncome}>
      <View style={styles.spending}>
        <View style={styles.iconMoney2Wrapper}>
          <Money
            state={iconMoney2State}
            vector={<Vector9 width={89} height={89} />}
          />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Spending</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$1,230.00</Text>
      </View>
      <View style={styles.spending}>
        <View style={styles.iconMoney2Wrapper}>
          <Money
            state={iconMoney2State1}
            vector={<Vector11 width={89} height={89} />}
          />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Giving</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$200.00</Text>
      </View>
      <View style={styles.spending}>
        <View style={styles.iconMoney2Wrapper}>
          <Money
            state={iconMoney2State2}
            vector={<Vector10 width={89} height={89} />}
          />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Income</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$2,245.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_103,
  },
  spendingGivingIncome: {
    width: 340,
    gap: Gap.gap_20,
    flexDirection: "row",
    height: Height.height_100,
  },
  spending: {
    width: Width.width_100,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingTop: Padding.padding_6,
    paddingBottom: Padding.padding_10,
    height: Height.height_100,
  },
  iconMoney2Wrapper: {
    width: Width.width_69,
    height: Height.height_37,
    paddingLeft: Padding.padding_30,
    zIndex: 2,
    flexDirection: "row",
  },
  spending2: {
    height: Height.height_28,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_28,
    color: Color.vikafjellColorsGeneralLabels,
    zIndex: 1,
  },
  text: {
    height: Height.height_19,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    color: Color.colorDarkslategray,
  },
});

export default SpendingGivingIncome;
