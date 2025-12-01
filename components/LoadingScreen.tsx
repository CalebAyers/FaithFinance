import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

interface LoadingScreenProps {
  showSpinner?: boolean;
}

// Loading screen component - displays app logo and optional spinner
const LoadingScreen = ({ showSpinner = false }: LoadingScreenProps) => {
  return (
    <View style={styles.container}>   
      {/* Logo and Text Row */}
      <View style={styles.logoTextContainer}>
        {/* App Name */}
        <Text style={styles.appName}>FaithFinance</Text>
        {/* App Logo */}
        <Image
          source={require("../assets/FaithFinance_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      {/* Optional Loading Spinner */}
      {showSpinner && (
        <ActivityIndicator
          size="large"
          color={Color.gOLD3}
          style={styles.spinner}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.mainRed,
    justifyContent: "center",
    alignItems: "center",
  },
  logoTextContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  logo: {
    width: 60,
    height: 60,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
    textAlign: "center",
  },
  spinner: {
    marginTop: 40,
  },
});

export default LoadingScreen;
