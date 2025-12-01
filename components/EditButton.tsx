import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

interface EditButtonProps {
  onPress: () => void;
  label?: string;
  style?: ViewStyle;
}

// Reusable edit button component with gold border and press state
const EditButton: React.FC<EditButtonProps> = ({ 
  onPress, 
  label = "Edit",
  style 
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity 
      style={[
        styles.editButton, 
        pressed && styles.editButtonPressed,
        style
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={styles.editButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: Color.componentsBackgrounf,
    paddingVertical: 6,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    alignItems: "center",
    marginTop: 6,
  },
  editButtonPressed: {
    backgroundColor: 'rgba(225,173,1,0.2)',
  },
  editButtonText: {
    color: Color.gOLD3,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
});

export default EditButton;
