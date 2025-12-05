import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLayout from "../components/AppLayout";
import SectionTitle from "../components/SectionTitle";
import SpendingGivingIncome from "../components/SpendingGivingIncome";
import BibleVerses from "../components/BibleVerses";
import AddTransaction from "../components/AddTransaction";
import AddTransactionModal from "../components/AddTransactionModal";
import Transaction from "../components/Transaction";
import { useData } from "../context/DataContext";
import { sortTransactionsByDate, formatCurrency } from "../utils/transactionUtils";

/**
 * HomePage - Main dashboard screen
 * Displays: Financial summary cards (income/spending/giving), daily Bible verse, 6 most recent transactions
 * Features: Quick add transaction button, view all transactions link
 */
const HomePage = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { transactions, addTransaction } = useData();

  // Get 6 most recent transactions
  const recentTransactions = sortTransactionsByDate(transactions).slice(0, 6);

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

  return (
    <AppLayout title="FaithFinance" navigation={navigation} currentScreen="HomePage">
      {/* Summary Cards - Shows total Spending, Giving, and Income */}
      <View style={styles.cardsContainer}>
        <SpendingGivingIncome />
      </View>

      {/* Daily Bible Verse - Provides spiritual encouragement */}
      <View style={styles.bibleVerseContainer}>
        <BibleVerses />
      </View>

      {/* Add Transaction Button - Quick access to add new transaction */}
      <View style={styles.addTransactionContainer}>
        <AddTransaction onPress={() => setModalVisible(true)} />
      </View>

      {/* Recent Transactions Section - Shows last few transactions */}
      <View style={styles.transactionsSection}>
        <SectionTitle>Recent Transactions</SectionTitle>
        
        {/* Transaction List - Displays real data from storage */}
        <View style={styles.transactionsList}>
          {recentTransactions.map((txn) => (
            <Transaction
              key={txn.id}
              state={txn.type === 'income' ? 'Income' : txn.type === 'spending' ? 'Spending' : 'Giving'}
              category={txn.category}
              prop={`${txn.type === 'income' ? '+' : '-'}${formatCurrency(txn.amount)}`}
              date={new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            />
          ))}
        </View>
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
  cardsContainer: {
    marginBottom: 20, // Space below summary cards
  },
  bibleVerseContainer: {
    marginBottom: 20, // Space below Bible verse
  },
  addTransactionContainer: {
    marginBottom: 15, // Space below add transaction button
  },
  transactionsSection: {
    flex: 1,
    marginBottom: 80, // Extra space for bottom navigation
  },
  transactionsList: {
    gap: 12, // Space between each transaction item
  },
});

export default HomePage;
