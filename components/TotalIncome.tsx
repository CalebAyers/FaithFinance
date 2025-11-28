import * as React from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import TopSpending from "./TopSpending";
import { Height, Width, BoxShadow } from "../GlobalStyles";

export type TotalIncomeType = {
  trendIcon?: ImageSourcePropType;
  topSpending?: string;
  education?: string;
  emptyValue?: string;
  topSpendingBorderColor?: string;
  topSpendingColor?: string;
  emptyValueColor?: string;
};

const TotalIncome = ({
  trendIcon,
  topSpending,
  education,
  emptyValue,
  topSpendingBorderColor,
  topSpendingColor,
  emptyValueColor,
}: TotalIncomeType) => {
  return (
    <View style={styles.totalIncome}>
      <TopSpending
        topSpendingBorderColor={topSpendingBorderColor}
        trendIcon={trendIcon}
        topSpending={topSpending}
        topSpendingColor={topSpendingColor}
        education={education}
        emptyValue={emptyValue}
        emptyValueColor={emptyValueColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  totalIncome: {
    height: Height.height_90,
    width: Width.width_170,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    flexDirection: "row",
    zIndex: 1,
  },
});

export default TotalIncome;
