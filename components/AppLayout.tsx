import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AppHeader from "./AppHeader";
import BottomNavigation from "./BottomNavigation";
import { Color } from "../GlobalStyles";

// Main layout wrapper - provides header, scrollable content, and bottom nav
// Usage: <AppLayout title="Screen Name" navigation={navigation} currentScreen="HomePage">{content}</AppLayout>
type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
  onProfilePress?: () => void;
  showProfile?: boolean;
  showBackButton?: boolean; // Show back arrow in header
  onBackPress?: () => void; // Back button handler
  navigation?: any;
  currentScreen?: string; // Current screen to highlight active nav item
  stickyHeader?: React.ReactNode; // Optional sticky header component (e.g., toggles)
};

const AppLayout = ({ 
  title, 
  children, 
  onProfilePress, 
  showProfile = true,
  showBackButton = false,
  onBackPress,
  navigation,
  currentScreen = 'HomePage',
  stickyHeader
}: AppLayoutProps) => {
  // Navigation items configuration for bottom nav bar
  // TO ADD/CHANGE SCREENS: Modify these navigation targets
  const navItems = [
    { icon: 'home' as const, label: 'Home', onPress: () => navigation?.navigate('HomePage'), screenName: 'HomePage' },
    { icon: 'cash' as const, label: 'Transaction', onPress: () => navigation?.navigate('TransactionPage'), screenName: 'TransactionPage' },
    { icon: 'stats-chart' as const, label: 'Insights', onPress: () => navigation?.navigate('InsightPage'), screenName: 'InsightPage' },
    { icon: 'book' as const, label: 'Reflection', onPress: () => navigation?.navigate('ReflectionPage'), screenName: 'ReflectionPage' },
    { icon: 'person' as const, label: 'Profile', onPress: () => navigation?.navigate('ProfilePage'), screenName: 'ProfilePage' },
  ];

  // Find active index based on current screen
  const activeIndex = navItems.findIndex(item => item.screenName === currentScreen);

  return (
    <View style={styles.container}>
      <AppHeader 
        title={title} 
        onProfilePress={onProfilePress}
        showProfile={showProfile}
        showBackButton={showBackButton}
        onBackPress={onBackPress}
      />
      
      {/* Sticky Header (e.g., toggles) */}
      {stickyHeader && (
        <View style={styles.stickyHeaderContainer}>
          {stickyHeader}
        </View>
      )}
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>

      <BottomNavigation items={navItems} activeIndex={activeIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColorLightMode,
  },
  stickyHeaderContainer: {
    backgroundColor: Color.backgroundColorLightMode,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 100,
  },
});

export default AppLayout;
