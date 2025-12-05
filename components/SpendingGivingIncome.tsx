import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Money from "./Money";
import VectorMoneyRed from "../assets/VectorMoneyRed.svg";
import VectorMoneyGreen from "../assets/VectorMoneyGreen.svg";
import Vector4 from "../assets/Vector4.svg";
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
import { useData } from "../context/DataContext";
import { formatCurrency } from "../utils/transactionUtils";

// Three summary cards showing total Spending (red), Giving (gold), and Income (green)
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
  const { getTotalByType } = useData();
  
  const totalSpending = getTotalByType('spending');
  const totalGiving = getTotalByType('giving');
  const totalIncome = getTotalByType('income');
  
  return (
    <View style={styles.spendingGivingIncome}>
      <View style={[styles.spending, styles.spendingBorder]}>
        <View style={styles.iconMoney2Wrapper}>
          <VectorMoneyRed width={35} height={35} />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Spending</Text>
        <Text style={[styles.text, styles.textFlexBox, styles.spendingAmount]}>
          {formatCurrency(totalSpending)}
        </Text>
      </View>
      <View style={[styles.spending, styles.givingBorder]}>
        <View style={styles.iconMoney2Wrapper}>
          <Vector4 width={35} height={35} />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Giving</Text>
        <Text style={[styles.text, styles.textFlexBox, styles.givingAmount]}>
          {formatCurrency(totalGiving)}
        </Text>
      </View>
      <View style={[styles.spending, styles.incomeBorder]}>
        <View style={styles.iconMoney2Wrapper}>
          <VectorMoneyGreen width={35} height={35} />
        </View>
        <Text style={[styles.spending2, styles.textFlexBox]}>Income</Text>
        <Text style={[styles.text, styles.textFlexBox, styles.incomeAmount]}>
          {formatCurrency(totalIncome)}
        </Text>
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
    width: Width.width_360,
    gap: Gap.gap_20,
    flexDirection: "row",
    height: 120,
  },
  spending: {
    width: 107,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingVertical: Padding.padding_10,
    paddingHorizontal: Padding.padding_8,
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
  },
  spendingBorder: {
    borderColor: Color.mainRed,
  },
  givingBorder: {
    borderColor: Color.gOLD3,
  },
  incomeBorder: {
    borderColor: Color.successColor,
  },
  iconMoney2Wrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  spending2: {
    fontSize: 14,
    lineHeight: LineHeight.lh_28,
    color: Color.colorDarkslategray,
  },
  text: {
    fontSize: 16,
    lineHeight: LineHeight.lh_25,
    fontWeight: "700",
  },
  spendingAmount: {
    color: Color.mainRed,
  },
  givingAmount: {
    color: Color.gOLD3,
  },
  incomeAmount: {
    color: Color.successColor,
  },
});

export default SpendingGivingIncome;
