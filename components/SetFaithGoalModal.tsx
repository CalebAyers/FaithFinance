import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface SetFaithGoalModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (goal: {
    amount: number;
    description: string;
  }) => void;
}

// Period options for faith goal
const PERIOD_OPTIONS = [
  "Daily",
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "Yearly",
];

const SetFaithGoalModal = ({ visible, onClose, onSave }: SetFaithGoalModalProps) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);

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
    setAmount("");
    setPeriod("");
    setDescription("");
    setPeriodDropdownOpen(false);
    onClose();
  };

  const handleSave = () => {
    if (!amount) {
      alert("Please fill in all required fields");
      return;
    }

    onSave({
      amount: parseFloat(amount),
      description,
    });

    // Reset form
    setAmount("");
    setDescription("");
    setPeriodDropdownOpen(false);
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
            <Text style={styles.title}>Setting Faith Goal</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color={Color.colorBlack} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            Setting Your Faith Goal to maintain daily faithful stewardship.
          </Text>

          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
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

                      {/* Period removed — goal is cumulative total */}

            {/* Description Input */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Description:</Text>
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
            <Text style={styles.addButtonText}>Add Faith Goal</Text>
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
    color: Color.gOLD3,
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
    borderColor: Color.gOLD3,
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
    borderColor: Color.gOLD3,
    marginTop: 4,
    maxHeight: 200,
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
    borderColor: Color.gOLD3,
    padding: 16,
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  addButton: {
    backgroundColor: Color.gOLD3,
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

export default SetFaithGoalModal;
