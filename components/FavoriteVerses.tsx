import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface ProfileActionButtonProps {
  label: string;
  icon?: string;
  onPress?: () => void;
  variant?: "default" | "active";
}

const ProfileActionButton = ({
  label,
  icon = "book-outline",
  onPress,
  variant = "default",
}: ProfileActionButtonProps) => {
  const isActive = variant === "active";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.buttonActive : styles.buttonDefault,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon as any}
        size={20}
        color={isActive ? Color.gOLD3 : Color.colorBlack}
      />
      <Text
        style={[styles.label, isActive ? styles.labelActive : styles.labelDefault]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  buttonDefault: {
    backgroundColor: "#fff9e6",
    borderColor: Color.colorBlack,
  },
  buttonActive: {
    backgroundColor: Color.colorBlack,
    borderColor: Color.colorBlack,
  },
  label: {
    fontSize: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  labelDefault: {
    color: Color.colorBlack,
  },
  labelActive: {
    color: Color.gOLD3,
  },
});

export default ProfileActionButton;
