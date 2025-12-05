import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scaleFont, scale, verticalScale } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";
import WelcomeActionButton from "../components/WelcomeActionButton";
import WelcomeInputField from "../components/WelcomeInputField";
import LoadingScreen from "../components/LoadingScreen";

interface SignUpPageProps {
  navigation: any;
}

const SignUpPage = ({ navigation }: SignUpPageProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    // Save username to profile
    const nameToSave = username.trim() || 'User';
    try {
      await AsyncStorage.setItem('@ff:profileName', nameToSave);
      console.log("Sign Up - Username saved:", nameToSave);
    } catch (error) {
      console.error("Error saving username:", error);
    }
    
    // Show loading screen
    setIsLoading(true);
    
    // Navigate to HomePage after 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("HomePage");
    }, 2000);
  };

  const handleSignIn = () => {
    // Navigate back to Welcome page for log in
    navigation.navigate("WelcomePage");
  };

  // Show loading screen while transitioning
  if (isLoading) {
    return <LoadingScreen showSpinner={true} />;
  }

  return (
    <View style={styles.container}>
      {/* Red Background */}
      <View style={styles.backgroundSection}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* White Content Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
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

            {/* Email Input */}
            <WelcomeInputField
              label="Email:"
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            {/* Password Input */}
            <WelcomeInputField
              label="Password:"
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="off"
              isLastField
            />

            {/* Sign Up Button */}
            <WelcomeActionButton onPress={handleSignUp} label="Sign Up" />

            {/* Or Text */}
            <Text style={styles.orText}>or</Text>

            {/* Log In Button */}
            <WelcomeActionButton 
              onPress={handleSignIn} 
              label="Log In" 
              backgroundColor="rgba(139, 0, 0, 0.6)" 
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.mainRed,
  },
  backgroundSection: {
    paddingTop: verticalScale(100),
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(32),
    alignItems: "center",
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: "700",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "center",
    marginBottom: verticalScale(20),
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  card: {
    backgroundColor: Color.backgroundColorLightMode,
    borderRadius: scale(16),
    padding: scale(24),
    marginBottom: verticalScale(180),
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  orText: {
    fontSize: scaleFont(14),
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginVertical: verticalScale(6),
  },
});

export default SignUpPage;
