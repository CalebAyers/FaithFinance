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

// Main home screen - shows summary cards, Bible verse, and recent transactions
const HomePage = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveTransaction = (transaction: any) => {
    console.log("New transaction:", transaction);
    // TODO: Save transaction to database/API
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
        
        {/* Transaction List - Replace with real data from your backend */}
        <View style={styles.transactionsList}>
          <Transaction category="Giving" prop="-$100.00" />
          <Transaction category="Spending" prop="-$50.00" />
          <Transaction category="Income" prop="+$500.00" />
          <Transaction category="Giving" prop="-$25.00" />
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
