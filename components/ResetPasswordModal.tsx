import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scaleFont } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";

interface ResetPasswordModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (passwords: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

const ResetPasswordModal = ({ visible, onClose, onSave }: ResetPasswordModalProps) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      alert("Please fill in all password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    onSave({
      oldPassword,
      newPassword,
      confirmPassword,
    });

    handleClose();
  };

  const handleClose = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Ionicons name="close" size={28} color={Color.colorBlack} />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Reset Password</Text>

          {/* Old Password Input */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Old Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter old password"
              placeholderTextColor="#999"
              value={oldPassword}
              onChangeText={setOldPassword}
              secureTextEntry
            />
          </View>

          {/* New Password Input */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>New Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              placeholderTextColor="#999"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
          </View>

          {/* Confirm New Password Input */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Confirm New Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
  },
  modalContainer: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxWidth: 400,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
  title: {
    fontSize: scaleFont(22),
    fontWeight: "bold",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 24,
    textAlign: "center",
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: scaleFont(14),
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    fontSize: scaleFont(14),
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  saveButton: {
    backgroundColor: Color.colorBlack,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 12,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: scaleFont(16),
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
  },
});

export default ResetPasswordModal;
