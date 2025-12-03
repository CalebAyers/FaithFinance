import * as React from "react";
import { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import SectionContainer from "../components/SectionContainer";
import ProfileActionButton from "../components/ProfileActionButton";
import ProfileUserCard from "../components/ProfileUserCard";
import ResetPasswordModal from "../components/ResetPasswordModal";
import { useData } from "../context/DataContext";
import { formatCurrency } from "../utils/transactionUtils";

/**
 * ProfilePage - User profile and account management screen
 * Displays: User info card with total income/giving, profile picture
 * Features: Edit profile, favorite verses, reset password, reset mock data (dev tool)
 */
const ProfilePage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { loadMockData, getTotalByType } = useData();
  
  // Get actual income and giving totals
  const totalIncome = getTotalByType('income');
  const totalGiving = getTotalByType('giving');

  const handleEditImage = () => {
    console.log("Edit profile image");
    // TODO: implement image picker
  };

  const handleFavoriteVerses = () => {
    console.log("Navigate to favorite verses");
    navigation.navigate("FavoriteVersesPage" as never);
  };

  const handleResetPassword = () => {
    setModalVisible(true);
  };

  const handleSavePassword = (passwords: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log("Password reset:", passwords);
    // TODO: Implement actual password reset logic
  };

  // Reset all transactions to mock data (for testing)
  const handleResetMockData = async () => {
    try {
      console.log("Resetting to mock data...");
      await loadMockData();
      console.log("Mock data loaded successfully");
      
      // Force a full app refresh to update all screens
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'HomePage' as never }],
        })
      );
      
      Alert.alert(
        "Success",
        "All transactions have been reset to mock data!",
        [{ text: "OK" }]
      );
    } catch (error) {
      console.error("Error loading mock data:", error);
      Alert.alert(
        "Error",
        "Failed to reset mock data. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  const handleManageAccount = () => {
  };

  const handleLogout = () => {
    console.log("Logout");
    // TODO: implement logout
  };

  return (
    <AppLayout 
      title="Profile" 
      navigation={navigation}
      currentScreen="ProfilePage"
      showProfile={false}
    >
      {/* User Info Card */}
      <SectionContainer>
        <ProfileUserCard 
          onEditImage={handleEditImage}
          incomeAmount={formatCurrency(totalIncome)}
          givingAmount={formatCurrency(totalGiving)}
        />
      </SectionContainer>

      {/* Action Buttons */}
      <SectionContainer>
        <ProfileActionButton 
          iconName="book"
          label="Favorite Verses"
          onPress={handleFavoriteVerses}
        />
      </SectionContainer>

      <SectionContainer>
        <ProfileActionButton 
          iconName="lock-closed"
          label="Reset Password"
          onPress={handleResetPassword}
        />
      </SectionContainer>

      <SectionContainer>
        <ProfileActionButton 
          iconName="refresh"
          label="Reset Mock Data"
          onPress={handleResetMockData}
        />
      </SectionContainer>

      <SectionContainer>
        <ProfileActionButton 
          iconName="log-out"
          label="Log Out"
          onPress={handleLogout}
        />
      </SectionContainer>

      <ResetPasswordModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSavePassword}
      />
    </AppLayout>
  );
};

export default ProfilePage;
