import * as React from "react";
import { useState, useMemo } from "react";
import { StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import SearchBar from "../components/SearchBar";
import AddTransactionModal from "../components/AddTransactionModal";
import FilterDropdown from "../components/FilterDropdown";
import TransactionList from "../components/TransactionList";
import ActionButtonRow from "../components/ActionButtonRow";
import { useData } from "../context/DataContext";
import { sortTransactionsByDate } from "../utils/transactionUtils";

/**
 * TransactionDetailPage - Full transaction history with advanced filtering
 * Features: Search bar, type filter, category filter, add/edit actions
 */
const TransactionDetailPage = ({ navigation }: any) => {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "income" | "spending" | "giving">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const { transactions, addTransaction } = useData();

  // Get categories based on selected type
  const categories = useMemo(() => {
    if (selectedType === "all") {
      const allCategories = new Set(transactions.map(t => t.category));
      return ["all", ...Array.from(allCategories)];
    }
    const typeTransactions = transactions.filter(t => t.type === selectedType);
    const typeCategories = new Set(typeTransactions.map(t => t.category));
    return ["all", ...Array.from(typeCategories)];
  }, [selectedType, transactions]);

  // Filter transactions based on type, category, and search
  const filteredTransactions = useMemo(() => {
    let filtered = transactions;
    
    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter(t => t.type === selectedType);
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(t => t.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(t => 
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return sortTransactionsByDate(filtered);
  }, [transactions, selectedType, selectedCategory, searchQuery]);

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

  const handleTypeSelect = (type: string) => {
    setSelectedType(type as "all" | "income" | "spending" | "giving");
    setSelectedCategory("all"); // Reset category when type changes
    setTypeDropdownOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false);
  };

  // Format option labels for dropdowns
  const formatTypeOption = (type: string) => 
    type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1);
  
  const formatCategoryOption = (category: string) =>
    category === "all" ? "All Categories" : category;

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

          {/* Type Filter Dropdown */}
          <FilterDropdown
            label="Type"
            value={formatTypeOption(selectedType)}
            options={["all", "income", "spending", "giving"]}
            isOpen={typeDropdownOpen}
            onToggle={() => {
              setTypeDropdownOpen(!typeDropdownOpen);
              setCategoryDropdownOpen(false);
            }}
            onSelect={handleTypeSelect}
            selectedValue={selectedType}
            formatOption={formatTypeOption}
          />

          {/* Category Filter Dropdown */}
          <FilterDropdown
            label="Category"
            value={formatCategoryOption(selectedCategory)}
            options={categories}
            isOpen={categoryDropdownOpen}
            onToggle={() => {
              setCategoryDropdownOpen(!categoryDropdownOpen);
              setTypeDropdownOpen(false);
            }}
            onSelect={handleCategorySelect}
            selectedValue={selectedCategory}
            formatOption={formatCategoryOption}
          />
        </>
      }
    >
      {/* Filtered Transaction List */}
      <TransactionList transactions={filteredTransactions} />

      {/* Action Buttons */}
      <ActionButtonRow
        buttons={[
          { label: "Add Transaction", onPress: () => setModalVisible(true) },
          { label: "Edit", onPress: () => console.log("Edit mode") },
        ]}
      />

      {/* Add Transaction Modal */}
      <AddTransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTransaction}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({});

export default TransactionDetailPage;

