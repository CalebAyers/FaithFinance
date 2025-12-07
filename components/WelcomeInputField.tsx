import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { scale, scaleFont, verticalScale } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";

interface WelcomeInputFieldProps extends TextInputProps {
  label: string;
  isLastField?: boolean; // Adds extra bottom margin for spacing before buttons
}

/**
 * WelcomeInputField - Reusable labeled input field for authentication screens
 * 
 * Used on: WelcomePage, SignUpPage
 * Features: Fully responsive, gold border, cream background
 * Props: All standard TextInput props plus custom label and spacing
 */
const WelcomeInputField = ({ label, isLastField, ...textInputProps }: WelcomeInputFieldProps) => {
  return (
    <View style={[styles.fieldContainer, isLastField && styles.lastFieldContainer]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    width: "100%",
    marginBottom: verticalScale(12),
  },
  lastFieldContainer: {
    marginBottom: verticalScale(28),
  },
  label: {
    fontSize: scaleFont(14),
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: verticalScale(8),
  },
  input: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: scale(12),
    borderWidth: scale(1),
    borderColor: Color.gOLD3,
    padding: scale(14),
    fontSize: scaleFont(14),
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    width: "100%",
  },
});

export default WelcomeInputField;
