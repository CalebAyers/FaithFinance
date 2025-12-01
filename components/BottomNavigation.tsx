import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Color, FontFamily } from "../GlobalStyles";

// Bottom navigation bar with icons (Home, Transaction, Insights, Reflection, Profile)
type NavItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  screenName?: string;
};

type BottomNavigationProps = {
  items: NavItem[];
  activeIndex?: number;
};

const BottomNavigation = ({ items, activeIndex = 0 }: BottomNavigationProps) => {
  return (
    <View style={styles.bottomNav}>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <TouchableOpacity 
            key={index}
            style={styles.navIconContainer}
            onPress={item.onPress}
            activeOpacity={0.6}
          >
            <Ionicons 
              name={item.icon} 
              size={28} 
              color={isActive ? Color.gOLD3 : Color.backgroundColorLightMode}
            />
            <Text style={[styles.navLabel, isActive && styles.activeLabel]}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: Color.mainRed,
    paddingTop: 12,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  navLabel: {
    fontSize: 10,
    color: Color.backgroundColorLightMode,
    fontFamily: FontFamily.interMedium,
    marginTop: 4,
  },
  activeLabel: {
    color: Color.gOLD3,
  },
});

export default BottomNavigation;
