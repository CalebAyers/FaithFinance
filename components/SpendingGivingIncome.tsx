import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Spending from "./Spending";
import { Height, Gap } from "../GlobalStyles";

const SpendingGivingIncome = () => {
  const [spendingItems] = useState([
    { spending: "Spending", prop: "$1,230.00", state: "default" },
    { spending: "Giving", prop: "$200.00", state: "default" },
    { spending: "Income", prop: "$2,245.00", state: "default" },
  ]);

  return (
    <View style={styles.spendingGivingIncome}>
      {spendingItems.map((item, index) => (
        <Spending
          key={index}
          spending={item.spending}
          prop={item.prop}
          state={item.state}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  spendingGivingIncome: {
    height: Height.height_100,
    width: 340,
    flexDirection: "row",
    gap: Gap.gap_20,
  },
});

export default SpendingGivingIncome;
