import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLayout from "../components/AppLayout";
import TransactionToggleThreeWay from "../components/TransactionToggleThreeWay";
import AddTransaction from "../components/AddTransaction";
import AddTransactionModal from "../components/AddTransactionModal";
import Transaction from "../components/Transaction";
import { useData } from "../context/DataContext";
import { sortTransactionsByDate, formatCurrency } from "../utils/transactionUtils";

/**
 * TransactionPage - Transaction history with simple type filtering
 * Displays: All transactions filtered by type (Incoming/Spending/Giving)
 * Features: 3-way toggle for transaction types, add transaction button
 * Note: For advanced filtering, see TransactionDetailPage
 */
const TransactionPage = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<"incoming" | "spending" | "giving">("incoming");
  const [modalVisible, setModalVisible] = useState(false);
  
  const { getTransactionsByType, addTransaction } = useData();

  const handleSaveTransaction = async (transaction: any) => {
    await addTransaction(
      transaction.type,
      transaction.amount,
      transaction.category,
      transaction.description,
      transaction.date
    );
    setModalVisible(false);
  };

  // Get transactions by type and sort by date
  const typeMap = { incoming: 'income', spending: 'spending', giving: 'giving' } as const;
  const currentType = typeMap[activeTab];
  const currentTransactions = sortTransactionsByDate(getTransactionsByType(currentType));

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
        {currentTransactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            state={transaction.type === 'income' ? 'Income' : transaction.type === 'spending' ? 'Spending' : 'Giving'}
            category={transaction.category}
            prop={`${transaction.type === 'income' ? '+' : '-'}${formatCurrency(transaction.amount)}`}
            date={new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
