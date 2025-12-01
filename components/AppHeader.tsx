import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

// Red header bar with title and optional profile/back button
type AppHeaderProps = {
  title: string;
  onProfilePress?: () => void;
  showProfile?: boolean;
  showBackButton?: boolean; // Show back arrow instead of profile
  onBackPress?: () => void; // Back button handler
};

const AppHeader = ({ title, onProfilePress, showProfile = true, showBackButton = false, onBackPress }: AppHeaderProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const handleProfilePress = () => {
    if (onProfilePress) {
      onProfilePress();
      return;
    }
    // fallback to the profile screen registered in navigator
    navigation.navigate("ProfilePage" as never);
  };

  return (
    <SafeAreaView style={styles.headerSafeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        {showBackButton ? (
          <TouchableOpacity 
            style={styles.profileButton} 
            onPress={onBackPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            activeOpacity={1}
          >
            <Ionicons 
              name="arrow-back" 
              size={24} 
              color={isPressed ? Color.gOLD3 : "#fff"} 
            />
          </TouchableOpacity>
        ) : showProfile ? (
          <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress} activeOpacity={0.6}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    backgroundColor: Color.mainRed,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.mainRed,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FontFamily.interSemiBold,
    color: '#fff',
    fontWeight: '600',
  },
  profileButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12, // Larger touchable area without changing icon size
    margin: -12, // Negative margin to keep visual position the same
  },
  profileText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: FontFamily.interMedium,
  },
});

export default AppHeader;
