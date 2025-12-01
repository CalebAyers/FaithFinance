import * as React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// Profile action button with cream background and dark press state
type ProfileActionButtonProps = {
  onPress: () => void;
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  style?: any;
};

const ProfileActionButton = ({ onPress, label, iconName, style }: ProfileActionButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity 
      style={[styles.button, pressed && styles.buttonPressed, style]} 
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={1}
    >
      <Ionicons name={iconName} size={24} color={Color.colorBlack} style={styles.icon} />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorBlack,
  },
  buttonPressed: {
    backgroundColor: Color.backgroundColorLightMode1,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
  },
});

export default ProfileActionButton;
