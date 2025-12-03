import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

// Reusable dropdown filter component with scrollable menu
interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  selectedValue: string;
  formatOption?: (option: string) => string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
  selectedValue,
  formatOption = (opt) => opt,
}) => {
  return (
    <View style={styles.dropdownWrapper}>
      {/* Dropdown trigger button */}
      <TouchableOpacity style={styles.dropdown} onPress={onToggle}>
        <Text style={styles.dropdownLabel}>{label}: </Text>
        <Text style={styles.dropdownValue}>{value}</Text>
        <Ionicons 
          name={isOpen ? "chevron-up" : "chevron-down"} 
          size={20} 
          color={Color.gOLD3} 
        />
      </TouchableOpacity>
      
      {/* Dropdown menu */}
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
            {options.map((option) => (
              <TouchableOpacity 
                key={option}
                style={styles.dropdownItem}
                onPress={() => onSelect(option)}
              >
                <Text style={[
                  styles.dropdownText, 
                  selectedValue === option && styles.dropdownTextActive
                ]}>
                  {formatOption(option)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    marginBottom: 12,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownLabel: {
    fontSize: 14,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.interMedium,
  },
  dropdownValue: {
    flex: 1,
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
  },
  dropdownMenu: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    marginTop: 4,
    maxHeight: 200,
    overflow: 'hidden',
  },
  dropdownScroll: {
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: {
    fontSize: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
  },
  dropdownTextActive: {
    color: Color.gOLD3,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
  },
});

export default FilterDropdown;
