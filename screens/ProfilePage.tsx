import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Modal, View, TextInput, TouchableOpacity, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [userName, setUserName] = useState<string | null>(null);
  const [nameModalVisible, setNameModalVisible] = useState(false);
  const [nameDraft, setNameDraft] = useState("");

  const PROFILE_NAME_KEY = '@ff:profileName';

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(PROFILE_NAME_KEY);
        if (raw) setUserName(raw);
      } catch (e) {
        console.warn('Failed to load profile name', e);
      }
    })();
  }, []);

  const handleEditImage = () => {
    console.log("Edit profile image");
    // TODO: implement image picker
  };

  const openEditName = () => {
    setNameDraft(userName ?? "");
    setNameModalVisible(true);
  };

  const handleSaveName = async () => {
    const trimmed = (nameDraft || "").trim();
    if (!trimmed) return setNameModalVisible(false);
    try {
      await AsyncStorage.setItem(PROFILE_NAME_KEY, trimmed);
      setUserName(trimmed);
    } catch (e) {
      console.warn('Failed to save profile name', e);
    }
    setNameModalVisible(false);
  };

  const handleCancelName = () => {
    setNameModalVisible(false);
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

  const handleResetMockData = () => {
    console.log("Reset Mock Data");
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
        <ProfileUserCard onEditImage={handleEditImage} onEditName={openEditName} userName={userName ?? undefined} />
      </SectionContainer>

      {/* Edit Name Modal */}
      <Modal visible={nameModalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <View style={{ width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>Edit Name</Text>
            <TextInput value={nameDraft} onChangeText={setNameDraft} placeholder="Your name" style={{ borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 12 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 8 }}>
              <TouchableOpacity onPress={handleCancelName} style={{ padding: 10 }}>
                <Text style={{ color: '#666' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveName} style={{ backgroundColor: '#f0c000', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8 }}>
                <Text style={{ color: '#fff', fontWeight: '700' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
