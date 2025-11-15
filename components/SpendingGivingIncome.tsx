import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Spending from "./Spending";
import Vector1 from "../assets/Vector1.svg";
import Vector3 from "../assets/Vector3.svg";
import Vector5 from "../assets/Vector5.svg";
import { Height, Gap } from "../GlobalStyles";

const SpendingGivingIncome = () => {
  const [spendingItems] = useState([
    {
      spending: "Spending",
      prop: "$1,230.00",
      state: "default",
      vector: <Vector1 width={89} height={89} />,
    },
    {
      spending: "Giving",
      prop: "$200.00",
      state: "default",
      vector: <Vector3 width={89} height={89} />,
    },
    {
      spending: "Income",
      prop: "$2,245.00",
      state: "default",
      vector: <Vector5 width={89} height={89} />,
    },
  ]);

  return (
    <View style={styles.spendingGivingIncome}>
      {spendingItems.map((item, index) => (
        <Spending
          key={index}
          spending={item.spending}
          prop={item.prop}
          state={item.state}
          vector={item.vector}
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
