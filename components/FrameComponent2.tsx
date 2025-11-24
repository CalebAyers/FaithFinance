import * as React from "react";
import { StyleSheet, View } from "react-native";
import TransactionType from "./TransactionType";
import AddTransaction from "./AddTransaction";
import { Padding, Gap, Width, BoxShadow } from "../GlobalStyles";

const FrameComponent2 = () => {
  return (
    <View style={styles.frameWrapper}>
      <View style={styles.transactionTypeParent}>
        <View style={styles.transactionType}>
          <TransactionType state="Spending" />
        </View>
        <AddTransaction />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapper: {
    width: 377,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
    height: 111,
  },
  transactionTypeParent: {
    zIndex: 2,
    gap: Gap.gap_18,
    width: Width.width_360,
    height: 111,
  },
  transactionType: {
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 20,
    zIndex: 2,
    width: Width.width_360,
    flexDirection: "row",
  },
});

export default FrameComponent2;
