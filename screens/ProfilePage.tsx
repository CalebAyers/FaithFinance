import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import SectionContainer from "../components/SectionContainer";
import ProfileActionButton from "../components/ProfileActionButton";
import ProfileUserCard from "../components/ProfileUserCard";
import ResetPasswordModal from "../components/ResetPasswordModal";

// Profile page - user info and account settings
const ProfilePage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleResetMoochData = () => {
    console.log("Reset Moch Data");
    // TODO: implement reset data
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
        <ProfileUserCard onEditImage={handleEditImage} />
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
          label="Reset Moch Data"
          onPress={handleResetMoochData}
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
