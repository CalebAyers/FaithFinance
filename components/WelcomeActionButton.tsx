import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { scale, scaleFont, verticalScale } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";

interface WelcomeActionButtonProps {
  onPress: () => void;
  label: string;
  backgroundColor?: string;
}

// Solid red action button for Welcome page
const WelcomeActionButton = ({ onPress, label, backgroundColor }: WelcomeActionButtonProps) => {
  return (
    <TouchableOpacity style={[styles.actionButton, backgroundColor ? { backgroundColor } : {}]} onPress={onPress}>
      <Text style={styles.actionButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: Color.mainRed,
    borderRadius: scale(12),
    padding: scale(12),
    width: "100%",
    alignItems: "center",
    marginBottom: verticalScale(12),
    marginTop: verticalScale(4),
  },
  actionButtonText: {
    color: "#fff",
    fontSize: scaleFont(16),
    fontWeight: "500",
    fontFamily: FontFamily.interSemiBold,
  },
});

export default WelcomeActionButton;
