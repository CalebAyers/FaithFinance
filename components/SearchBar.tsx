import * as React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

// Search bar with icon - reusable across screens
type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  iconColor?: string;
};

const SearchBar = ({ 
  value, 
  onChangeText, 
  placeholder = "Search...",
  iconColor = Color.gOLD3 
}: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={iconColor} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Color.gOLD3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
});

export default SearchBar;
