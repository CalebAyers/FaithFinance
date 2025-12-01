import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AppLayout from "../components/AppLayout";
import SearchBar from "../components/SearchBar";
import TwoWayToggle from "../components/TwoWayToggle";
import AddTransactionModal from "../components/AddTransactionModal";
import Transaction from "../components/Transaction";
import { Color, FontFamily } from "../GlobalStyles";

// Transaction detail list page with search, filtering, and sorting
const TransactionDetailPage = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Date");
  const [addTransPressed, setAddTransPressed] = useState(false);
  const [editPressed, setEditPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveTransaction = (transaction: any) => {
    console.log("New transaction:", transaction);
    // TODO: Save transaction to database/API
  };

  // Sample transaction data - replace with real data
  const transactions = [
    { category: "Income", prop: "+$100.00", date: "Nov 28, 2025" },
    { category: "Spending", prop: "-$50.00", date: "Nov 27, 2025" },
    { category: "Giving", prop: "-$25.00", date: "Nov 26, 2025" },
    { category: "Income", prop: "+$200.00", date: "Nov 25, 2025" },
    { category: "Spending", prop: "-$75.00", date: "Nov 24, 2025" },
    { category: "Giving", prop: "-$30.00", date: "Nov 23, 2025" },
  ];

  return (
    <AppLayout 
      title="Transaction Details" 
      navigation={navigation} 
      currentScreen="TransactionPage"
      showBackButton={true}
      onBackPress={() => navigation.goBack()}
      stickyHeader={
        <>
          {/* Search Bar */}
          <SearchBar 
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Sorted By Section */}
          <Text style={styles.sortedByTitle}>Sorted By</Text>
          
          {/* Sort Toggle */}
          <TwoWayToggle 
            leftLabel="Date"
            rightLabel="Category"
            activeTab={sortBy}
            onTabChange={setSortBy}
          />
        </>
      }
    >
      {/* Transaction List */}
      <View style={styles.transactionsList}>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            category={transaction.category}
            prop={transaction.prop}
            date={transaction.date}
          />
        ))}
      </View>

      {/* Action Buttons at bottom */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, addTransPressed && styles.buttonPressed]}
          onPressIn={() => setAddTransPressed(true)}
          onPressOut={() => setAddTransPressed(false)}
          onPress={() => setModalVisible(true)}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, editPressed && styles.buttonPressed]}
          onPressIn={() => setEditPressed(true)}
          onPressOut={() => setEditPressed(false)}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
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
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 12,
  },
  button: {
    flex: 1,
    backgroundColor: Color.componentsBackgrounf,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: 'rgba(225,173,1,0.2)',
  },
  buttonText: {
    color: Color.gOLD3,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interMedium,
  },
  sortedByTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 12,
  },
  transactionsList: {
    gap: 12,
    marginBottom: 20,
  },
});

export default TransactionDetailPage;
