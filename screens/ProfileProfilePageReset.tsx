import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import ProfileActionButton from "../components/FavoriteVerses";
import ResetPasswordModal from "../components/ResetPasswordModal";
import {
  Color,
  FontFamily,
  FontSize,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const ProfileProfilePageReset = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSavePassword = (passwords: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log("Password reset:", passwords);
    // TODO: Implement actual password reset logic
  };

  const handleResetMockData = () => {
    console.log("Reset mock data");
    // TODO: Implement mock data reset
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Profile2 />
          </View>
          <Text style={styles.editImageText}>Edit Image</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>First and Last Name</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Income</Text>
              <Text style={styles.statValueIncome}>$2,245.00</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Giving</Text>
              <Text style={styles.statValueGiving}>$200.00</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <ProfileActionButton
          label="Favorite Verses"
          icon="book-outline"
          variant="active"
          onPress={() => console.log("Navigate to Favorite Verses")}
        />
        <ProfileActionButton
          label="Reset Password"
          icon="lock-closed-outline"
          variant="active"
          onPress={() => setModalVisible(true)}
        />
        <ProfileActionButton
          label="Reset Mock Data"
          icon="refresh-outline"
          variant="active"
          onPress={handleResetMockData}
        />
      </View>

      <Default1
        iconMoney3={require("../assets/active1.png")}
        state="default"
        activePosition="absolute"
        activeHeight="100%"
        activeTop="0%"
        activeRight="0%"
        activeBottom="0%"
        activeLeft="0%"
        homeColor="#c99700"
        state1="default"
        activePosition1="absolute"
        activeHeight1="100%"
        activeTop1="0%"
        activeRight1="0%"
        activeBottom1="0%"
        activeLeft1="0%"
        insightsColor="#c99700"
        state2="default"
        bookPosition="absolute"
        bookHeight="100%"
        bookTop="0%"
        bookRight="0%"
        bookBottom="0%"
        bookLeft="0%"
        reflectionColor="#c99700"
        state3="default"
        profileHeight="100%"
        profileTop="0%"
        profileRight="0%"
        profileBottom="0%"
        profileLeft="0%"
        profilePosition="absolute"
        profileColor="#c99700"
      />
      <IPhoneBezel
        type="iPhone 16"
        iPhone16={require("../assets/iPhone-16.png")}
      />

      <ResetPasswordModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSavePassword}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColorLightMode,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    borderWidth: 1,
    borderColor: Color.backgroundColorLightMode1,
    padding: 16,
    marginBottom: 24,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 12,
  },
  profileImageContainer: {
    width: 65,
    height: 51,
    marginBottom: 8,
  },
  editImageText: {
    fontSize: FontSize.fs_10,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "center",
  },
  userInfo: {
    alignItems: "center",
  },
  userName: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  statCard: {
    backgroundColor: Color.colorOldlace,
    borderRadius: Border.br_12,
    padding: 12,
    width: 100,
    alignItems: "center",
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
  },
  statLabel: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.successColor,
    marginBottom: 4,
  },
  statValueIncome: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.successColor,
  },
  statValueGiving: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.gOLD3,
  },
  actionsContainer: {
    gap: 16,
    marginBottom: 24,
  },
});

export default ProfileProfilePageReset;
