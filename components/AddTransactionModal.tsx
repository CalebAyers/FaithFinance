import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (transaction: {
    type: string;
    amount: number;
    category: string;
    description: string;
    date: string;
  }) => void;
}

// Spending categories for college students and professors
const SPENDING_CATEGORIES = [
  "Dining out",
  "Groceries",
  "Coffee & Snacks",
  "Transportation",
  "Gas",
  "Parking",
  "Housing",
  "Rent",
  "Utilities",
  "Internet",
  "Textbooks",
  "School Supplies",
  "Tuition",
  "Health & Wellness",
  "Gym Membership",
  "Healthcare",
  "Pharmacy",
  "Entertainment",
  "Movies & Streaming",
  "Concerts & Events",
  "Hobbies",
  "Shopping",
  "Clothing",
  "Electronics",
  "Personal Care",
  "Software & Apps",
  "Phone Bill",
  "Internet Services",
  "Office Supplies",
  "Professional Development",
  "Conferences",
  "Other",
];

const AddTransactionModal = ({ visible, onClose, onSave }: AddTransactionModalProps) => {
  const [type, setType] = useState<"Spending" | "Income" | "Giving" | null>("Giving");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Today's date YYYY-MM-DD
  
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  // Format amount as currency
  const handleAmountChange = (text: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = text.replace(/[^0-9.]/g, '');
    
    // Ensure only one decimal point
    const parts = numericValue.split('.');
    if (parts.length > 2) return;
    
    // Limit to 2 decimal places
    if (parts[1] && parts[1].length > 2) return;
    
    setAmount(numericValue);
  };

  // Format display value with dollar sign
  const displayAmount = amount ? `$${amount}` : '';

  // Reset form when modal closes
  const handleClose = () => {
    setType("Giving");
    setCategory("");
    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().split('T')[0]);
    setTypeDropdownOpen(false);
    setCategoryDropdownOpen(false);
    onClose();
  };

  const handleSave = () => {
    if (!type || !amount || (type === "Spending" && !category)) {
      alert("Please fill in all required fields");
      return;
    }

    onSave({
      type,
      amount: parseFloat(amount),
      category: type === "Spending" ? category : type,
      description,
      date,
    });

    // Reset form
    setType("Giving");
    setCategory("");
    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().split('T')[0]);
    setTypeDropdownOpen(false);
    setCategoryDropdownOpen(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Add Transaction</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color={Color.mainRed} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            Track your spending or income to maintain faithful stewardship.
          </Text>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Type Dropdown */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Type:</Text>
              <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setTypeDropdownOpen(!typeDropdownOpen)}
              >
                <Text style={styles.dropdownText}>
                  {type || "Select transaction type"}
                </Text>
                <Ionicons
                  name={typeDropdownOpen ? "chevron-up" : "chevron-down"}
                  size={20}
                  color={Color.mainRed}
                />
              </TouchableOpacity>

              {typeDropdownOpen && (
                <View style={styles.dropdownMenu}>
                  {["Spending", "Income", "Giving"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setType(item as "Spending" | "Income" | "Giving");
                        setTypeDropdownOpen(false);
                        if (item !== "Spending") {
                          setCategory("");
                        }
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Category Dropdown (only for Spending) */}
            {type === "Spending" && (
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Category:</Text>
                <TouchableOpacity
                  style={styles.dropdown}
                  onPress={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  <Text style={styles.dropdownText}>
                    {category || "Select spending category"}
                  </Text>
                  <Ionicons
                    name={categoryDropdownOpen ? "chevron-up" : "chevron-down"}
                    size={20}
                    color={Color.mainRed}
                  />
                </TouchableOpacity>

                {categoryDropdownOpen && (
                  <ScrollView style={styles.dropdownMenuScrollable} nestedScrollEnabled>
                    {SPENDING_CATEGORIES.map((item) => (
                      <TouchableOpacity
                        key={item}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setCategory(item);
                          setCategoryDropdownOpen(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
            )}

            {/* Amount Input */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Amount:</Text>
              <TextInput
                style={styles.input}
                placeholder="$0.00"
                placeholderTextColor="#999"
                keyboardType="decimal-pad"
                value={displayAmount}
                onChangeText={handleAmountChange}
              />
            </View>

            {/* Date Input */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={date}
                onChangeText={setDate}
              />
            </View>

            {/* Description Input */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Description (optional):</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter description"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
              />
            </View>
          </ScrollView>

          {/* Add Button */}
          <TouchableOpacity style={styles.addButton} onPress={handleSave}>
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add Transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 16,
    width: "90%",
    maxHeight: "85%",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    fontFamily: FontFamily.interSemiBold,
    color: Color.mainRed,
  },
  closeButton: {
    padding: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Color.colorBlack,
    marginBottom: 24,
    fontFamily: FontFamily.interMedium,
  },
  scrollContent: {
    maxHeight: 400,
  },
  fieldContainer: {
    marginBottom: 16,
    zIndex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.mainRed,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  dropdownMenu: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.mainRed,
    marginTop: 4,
    maxHeight: 150,
  },
  dropdownMenuScrollable: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.mainRed,
    marginTop: 4,
    maxHeight: 300,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  dropdownItemText: {
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.mainRed,
    padding: 16,
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  addButton: {
    backgroundColor: Color.mainRed,
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
  },
});

export default AddTransactionModal;
