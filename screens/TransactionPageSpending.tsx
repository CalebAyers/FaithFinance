import * as React from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Page from "../components/Page";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Transaction from "../components/Transaction";
import { Height, Color, Width, Padding, MaxWidth } from "../GlobalStyles";

const TransactionPageSpending = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAwareScrollView
      style={styles.transactionPageSpending}
      contentContainerStyle={styles.transactionPageSpendingContent}
    >
      <Page />
      <View style={styles.transactionList}>
        <ScrollView
          style={styles.transactionParent}
          contentContainerStyle={styles.frameContainerContent}
        >
          <Pressable
            style={[styles.transaction, styles.transactionLayout]}
            onPress={() =>
              navigation.navigate("TransactionDetailedListSpendingReset")
            }
          >
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              emptySpace="+$100.00"
              emptySpaceColor="#27ae60"
              state1="default"
            />
          </Pressable>
          <View style={[styles.transaction, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              emptySpace="+$100.00"
              emptySpaceColor="#27ae60"
              state1="default"
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={135}
              category="Income"
              categoryWidth={45}
              categoryColor="#27ae60"
              emptySpace="+$100.00"
              emptySpaceColor="#27ae60"
              state1="default"
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              emptySpace="-$100.00"
              emptySpaceColor="#720404"
              state1="default"
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              emptySpace="-$100.00"
              emptySpaceColor="#720404"
              state1="default"
            />
          </View>
          <Transaction
            state="Giving"
            transactionDetailColor="#000"
            transactionDetailTextAlign="left"
            transactionDetailDisplay="flex"
            transactionDetailAlignItems="center"
            secondTransactionDetailWidth={130}
            category="Giving"
            categoryWidth={40}
            categoryColor="#e1ad01"
            emptySpace="-$100.00"
            emptySpaceColor="#e1ad01"
            state1="default"
          />
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="#000"
              transactionDetailTextAlign="left"
              transactionDetailDisplay="flex"
              transactionDetailAlignItems="center"
              secondTransactionDetailWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              emptySpace="-$100.00"
              emptySpaceColor="#720404"
              state1="default"
            />
          </View>
          <View style={[styles.transaction3, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="unset"
              transactionDetailTextAlign="unset"
              transactionDetailDisplay="unset"
              transactionDetailAlignItems="unset"
              secondTransactionDetailWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              emptySpace="-$100.00"
              emptySpaceColor="#720404"
              state1="default"
            />
          </View>
          <Transaction
            state="Giving"
            transactionDetailColor="unset"
            transactionDetailTextAlign="unset"
            transactionDetailDisplay="unset"
            transactionDetailAlignItems="unset"
            secondTransactionDetailWidth={130}
            category="Giving"
            categoryWidth={40}
            categoryColor="#e1ad01"
            emptySpace="-$100.00"
            emptySpaceColor="#e1ad01"
            state1="default"
          />
          <View style={[styles.transaction, styles.transactionLayout]}>
            <Transaction
              state="Giving"
              transactionDetailColor="unset"
              transactionDetailTextAlign="unset"
              transactionDetailDisplay="unset"
              transactionDetailAlignItems="unset"
              secondTransactionDetailWidth={148}
              category="Spending"
              categoryWidth={58}
              categoryColor="#720404"
              emptySpace="-$100.00"
              emptySpaceColor="#720404"
              state1="default"
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  frameContainerContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 33,
    height: 1046,
  },
  transactionPageSpendingContent: {
    flexDirection: "column",
    paddingBottom: 209,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 1503,
    flex: 1,
  },
  transactionLayout: {
    height: Height.height_80,
    flexDirection: "row",
  },
  transactionPageSpending: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: "100%",
    flex: 1,
  },
  transactionList: {
    width: Width.width_376,
    height: 1046,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_16,
    marginTop: -604,
    flexDirection: "row",
  },
  transactionParent: {
    maxWidth: MaxWidth.max_w_360,
    width: Width.width_360,
    flex: 1,
  },
  transaction: {
    alignSelf: "stretch",
  },
  transaction3: {
    width: Width.width_360,
  },
});

export default TransactionPageSpending;
