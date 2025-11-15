import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Default1 from "../components/Default1";
import TransactionArea from "../components/TransactionArea";
import Transaction from "../components/Transaction";
import Vector5 from "../assets/Vector5.svg";
import Vector1 from "../assets/Vector1.svg";
import Vector3 from "../assets/Vector3.svg";
import { Height, Color, Width, Padding } from "../GlobalStyles";

const TransactionPageIncoming = () => {
  return (
    <SafeAreaView
      style={[styles.transactionPageIncoming, styles.scrollviewLayout]}
    >
      <KeyboardAvoidingView
        style={[styles.keyboardavoidingview, styles.scrollviewLayout]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewLayout]}
          contentContainerStyle={styles.transactionPageIncomingContent}
        >
          <View style={styles.headerBarDefaultParent}>
            <Default1
              defaultMarginTop="unset"
              state="default"
              profilePosition="absolute"
              profileTop="29"
              profileLeft="349"
              profileHeight="32"
              profileRight="unset"
              profileBottom="unset"
              profileColor="#e5e5e5"
            />
            <TransactionArea />
          </View>
          <View style={styles.transactionListArea}>
            <ScrollView
              style={styles.transactionList}
              contentContainerStyle={styles.transactionListContainerContent}
            >
              <Pressable
                style={[styles.transaction, styles.transactionLayout]}
                onPress={() => {}}
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
                  vector={<Vector5 width={89} height={89} />}
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
                  vector={<Vector5 width={89} height={89} />}
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
                  vector={<Vector5 width={89} height={89} />}
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
                  vector={<Vector1 width={89} height={89} />}
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
                  vector={<Vector1 width={89} height={89} />}
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
                vector={<Vector3 width={89} height={89} />}
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
                  vector={<Vector1 width={89} height={89} />}
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
                  vector={<Vector1 width={89} height={89} />}
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
                vector={<Vector3 width={89} height={89} />}
              />
              <View style={[styles.transaction, styles.transactionLayout]}>
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
                  vector={<Vector1 width={89} height={89} />}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  transactionListContainerContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 33,
    height: 1046,
  },
  transactionPageIncomingContent: {
    flexDirection: "column",
    paddingBottom: 209,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 1503,
    flex: 1,
  },
  scrollviewLayout: {
    width: "100%",
    flex: 1,
  },
  transactionLayout: {
    height: Height.height_80,
    flexDirection: "row",
  },
  transactionPageIncoming: {
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  scrollview: {
    backgroundColor: Color.backgroundColorLightMode,
    maxWidth: "100%",
    flex: 1,
  },
  headerBarDefaultParent: {
    width: Width.width_393,
    height: Height.height_852,
    zIndex: 1,
  },
  transactionListArea: {
    width: Width.width_376,
    height: 1046,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_16,
    marginTop: -604,
    flexDirection: "row",
  },
  transactionList: {
    maxWidth: 360,
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

export default TransactionPageIncoming;
