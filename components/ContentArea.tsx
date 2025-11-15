import * as React from "react";
import { StyleSheet, View } from "react-native";
import TransactionType from "./TransactionType";
import AddTransaction from "./AddTransaction";
import { Width, Padding, Height, Gap, BoxShadow } from "../GlobalStyles";

export type ContentAreaType = {
  state?: string;
  frameViewBackgroundColor?: string;
};

const ContentArea = ({ state, frameViewBackgroundColor }: ContentAreaType) => {
  return (
    <View style={styles.contentArea}>
      <View style={styles.selectionArea}>
        <View style={styles.transactionType}>
          <TransactionType
            state={state}
            frameViewBackgroundColor={frameViewBackgroundColor}
          />
        </View>
        <AddTransaction />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentArea: {
    width: Width.width_377,
    paddingLeft: Padding.padding_17,
    flexDirection: "row",
    height: Height.height_111,
  },
  selectionArea: {
    zIndex: 2,
    gap: Gap.gap_18,
    width: Width.width_360,
    height: Height.height_111,
  },
  transactionType: {
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 20,
    zIndex: 2,
    width: Width.width_360,
    flexDirection: "row",
  },
});

export default ContentArea;
