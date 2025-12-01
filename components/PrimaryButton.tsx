import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Color, FontFamily, Border } from "../GlobalStyles";

// Primary red button with icon (like Add Transaction or Setting Faith Goal)
type PrimaryButtonProps = {
  onPress: () => void;
  label: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  style?: any;
};

const PrimaryButton = ({ onPress, label, iconName, style }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {iconName && (
        <Ionicons 
          name={iconName} 
          size={24} 
          color={Color.backgroundColorLightMode} 
          style={styles.icon} 
        />
      )}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.mainRed,
    borderRadius: Border.br_12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    fontWeight: '900',
  },
});

export default PrimaryButton;
