import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { DataProvider } from "./context/DataContext";
import LoadingScreen from "./components/LoadingScreen";

// Screen imports
import WelcomePage from "./screens/WelcomePage";
import SignUpPage from "./screens/SignUpPage";
import HomePage from "./screens/HomePage";
import InsightPage from "./screens/InsightPage";
import TransactionPage from "./screens/TransactionPage";
import TransactionDetailPage from "./screens/TransactionDetailPage";
import ReflectionPage from "./screens/ReflectionPage";
import ProfilePage from "./screens/ProfilePage";
import FavoriteVersesPage from "./screens/FavoriteVersesPage";

const Stack = createNativeStackNavigator();

/**
 * FaithFinance App - Main Entry Point
 * 
 * App Flow:
 * 1. Shows 2-second loading screen with logo on startup
 * 2. Navigates to WelcomePage (login/signup)
 * 3. User can sign up, log in, or continue as mock user
 * 4. After authentication, navigates to HomePage
 * 
 * Navigation Stack:
 * - WelcomePage: Initial login/signup screen
 * - SignUpPage: New user registration
 * - HomePage: Main dashboard with spending overview
 * - InsightPage: Financial analytics and charts
 * - TransactionPage: Transaction history
 * - TransactionDetailPage: Individual transaction details
 * - ReflectionPage: Bible verses and spiritual reflection
 * - ProfilePage: User profile and settings
 * - FavoriteVersesPage: Saved Bible verses
 */

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [isAppReady, setIsAppReady] = React.useState(false);

  // Load custom fonts
  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  // Show loading screen for 2 seconds on app start (matches user's design)
  React.useEffect(() => {
    if (fontsLoaded || error) {
      setTimeout(() => {
        setIsAppReady(true);
        setHideSplashScreen(true);
      }, 2000);
    }
  }, [fontsLoaded, error]);

  // Show loading screen while fonts are loading or during initial delay
  if (!fontsLoaded && !error) {
    return null;
  }

  if (!isAppReady) {
    return <LoadingScreen showSpinner={true} />;
  }

  return (
    <DataProvider>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="WelcomePage"
            screenOptions={{ headerShown: false }} // All screens use custom AppHeader
          >
            {/* Authentication Screens */}
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            
            {/* Main App Screens */}
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsightPage"
              component={InsightPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionPage"
              component={TransactionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetailPage"
              component={TransactionDetailPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReflectionPage"
              component={ReflectionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoriteVersesPage"
              component={FavoriteVersesPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
