import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { scaleFont, scale, verticalScale } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";
import WelcomeActionButton from "../components/WelcomeActionButton";
import WelcomeInputField from "../components/WelcomeInputField";
import LoadingScreen from "../components/LoadingScreen";

interface WelcomePageProps {
  navigation: any;
}

const WelcomePage = ({ navigation }: WelcomePageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    // TODO: Implement sign in logic
    console.log("Sign In:", username, password);
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log("Sign Up");
  };

  const handleContinueAsGuest = () => {
    // Show loading screen
    setIsLoading(true);
    
    // Navigate to HomePage after 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("HomePage");
    }, 2000);
  };

  // Show loading screen while transitioning
  if (isLoading) {
    return <LoadingScreen showSpinner={true} />;
  }

  return (
    <View style={styles.container}>
      {/* Red Header Section - Top Quarter */}
      <View style={styles.headerSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FaithFinance</Text>
          <Image 
            source={require("../assets/FaithFinance_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        {/* Mission Statement Card */}
        <View style={styles.missionCard}>
          <Text style={styles.missionTitle}>Mission Statement</Text>
        </View>
      </View>

      {/* White Content Section - Bottom Three Quarters */}
      <View style={styles.contentSection}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Username Input */}
          <WelcomeInputField
            label="UserName:"
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          {/* Password Input */}
          <WelcomeInputField
            label="Password:"
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            isLastField
          />

          {/* Sign In Button */}
          <WelcomeActionButton onPress={handleSignIn} label="Sign In" />

          {/* Sign Up Button */}
          <WelcomeActionButton onPress={handleSignUp} label="Sign Up" />

          {/* Continue as Mock User Button */}
          <WelcomeActionButton onPress={handleContinueAsGuest} label="Continue as Mock User" />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColorLightMode,
  },
  headerSection: {
    backgroundColor: Color.mainRed,
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(32),
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
    minHeight: "25%",
  },
  contentSection: {
    flex: 1,
    backgroundColor: Color.backgroundColorLightMode,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(40),
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: scale(2),
    marginBottom: verticalScale(24),
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: "700",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "center",
  },
  logo: {
    width: scale(50),
    height: scale(50),
  },
  missionCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: scale(16),
    borderWidth: scale(3),
    borderColor: Color.gOLD3,
    padding: scale(24),
    width: "100%",
    minHeight: verticalScale(180),
    justifyContent: "center",
    alignItems: "center",
  },
  missionTitle: {
    fontSize: scaleFont(18),
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "center",
  },
});

export default WelcomePage;
