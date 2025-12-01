import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface GraphTypeSelectorProps {
  selectedType: 'Pie Chart' | 'Line Chart' | 'Bar Chart';
  onTypeChange: (type: 'Pie Chart' | 'Line Chart' | 'Bar Chart') => void;
}

// Dropdown selector for choosing graph type
const GraphTypeSelector = ({ selectedType, onTypeChange }: GraphTypeSelectorProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleSelect = (type: 'Pie Chart' | 'Line Chart' | 'Bar Chart') => {
    onTypeChange(type);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.dropdownWrapper}>
      <TouchableOpacity 
        style={styles.graphSelector}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Ionicons name="list" size={20} color={Color.gOLD3} style={styles.graphIcon} />
        <Text style={styles.graphSelectedText}>{selectedType}</Text>
        <Ionicons 
          name={dropdownOpen ? "chevron-up" : "chevron-down"} 
          size={20} 
          color={Color.gOLD3} 
        />
      </TouchableOpacity>
      
      {dropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity 
            style={styles.dropdownItem}
            onPress={() => handleSelect('Pie Chart')}
          >
            <Text style={[styles.dropdownText, selectedType === 'Pie Chart' && styles.dropdownTextActive]}>
              Pie Chart
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.dropdownItem}
            onPress={() => handleSelect('Line Chart')}
          >
            <Text style={[styles.dropdownText, selectedType === 'Line Chart' && styles.dropdownTextActive]}>
              Line Chart
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.dropdownItem}
            onPress={() => handleSelect('Bar Chart')}
          >
            <Text style={[styles.dropdownText, selectedType === 'Bar Chart' && styles.dropdownTextActive]}>
              Bar Chart
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    marginBottom: 16,
    zIndex: 1000,
  },
  graphSelector: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  graphIcon: {
    marginRight: 12,
  },
  graphSelectedText: {
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
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
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

export default GraphTypeSelector;
