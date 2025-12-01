import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLayout from "../components/AppLayout";
import TransactionToggleThreeWay from "../components/TransactionToggleThreeWay";
import AddTransaction from "../components/AddTransaction";
import AddTransactionModal from "../components/AddTransactionModal";
import Transaction from "../components/Transaction";

// Transaction history page with filtering (Incoming/Spending/Giving)
const TransactionPage = ({ navigation }: any) => {
  // State to track which tab is active (incoming, spending, or giving)
  const [activeTab, setActiveTab] = useState<"incoming" | "spending" | "giving">("incoming");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveTransaction = (transaction: any) => {
    console.log("New transaction:", transaction);
    // TODO: Save transaction to database/API
  };

  // Sample transaction data - REPLACE WITH REAL DATA
  // TO CONNECT DATA: Replace these arrays with data from your API/database
  const incomingTransactions = [
    { category: "Income", prop: "+$100.00" },
    { category: "Income", prop: "+$100.00" },
    { category: "Income", prop: "+$100.00" },
  ];

  const spendingTransactions = [
    { category: "Spending", prop: "-$100.00" },
    { category: "Spending", prop: "-$100.00" },
    { category: "Spending", prop: "-$50.00" },
    { category: "Spending", prop: "-$25.00" },
  ];

  const givingTransactions = [
    { category: "Giving", prop: "-$100.00" },
    { category: "Giving", prop: "-$50.00" },
  ];

  // Determine which transactions to show based on active tab
  const currentTransactions = 
    activeTab === "incoming" 
      ? incomingTransactions 
      : activeTab === "spending" 
      ? spendingTransactions 
      : givingTransactions;

  return (
    <AppLayout 
      title="Transaction" 
      navigation={navigation} 
      currentScreen="TransactionPage"
      stickyHeader={
        <TransactionToggleThreeWay activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      {/* Add Transaction Button - allows user to create new transaction */}
      <View style={styles.addTransactionContainer}>
        <AddTransaction onPress={() => setModalVisible(true)} />
      </View>

      {/* Transaction List - shows filtered transactions based on active tab */}
      <View style={styles.transactionsList}>
        {currentTransactions.map((transaction, index) => (
          <Transaction
            key={index}
            category={transaction.category}
            prop={transaction.prop}
          />
        ))}
      </View>

      {/* Add Transaction Modal */}
      <AddTransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTransaction}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  addTransactionContainer: {
    marginBottom: 20, // Space between add button and transaction list
  },
  transactionsList: {
    gap: 12, // Space between each transaction item
    marginBottom: 20,
  },
});

export default TransactionPage;
