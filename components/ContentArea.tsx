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
        <AddTransaction
          state="Active"
          addTransactionWidth={360}
          state1="Default"
          addTransaction="Add Transaction"
          addTransactionColor="#e1ad01"
          addTransactionPosition="absolute"
          addTransactionHeight="100%"
          addTransactionTop="0%"
          addTransactionRight="0%"
          addTransactionBottom="0%"
          addTransactionLeft="0%"
          addTransactionBackgroundColor="#8b0000"
          addTransactionBorderStyle="unset"
          addTransactionBorderColor="unset"
          addTransactionFontSize={16}
          state2="default"
          addHeight="52%"
          addTop="24%"
          addBottom="24%"
          addMarginTop="unset"
          addWidth="7.22%"
          addLeft="23.06%"
          vectorIconWidth="58.46%"
          vectorIconRight="20.77%"
          vectorIconLeft="20.77%"
        />
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
