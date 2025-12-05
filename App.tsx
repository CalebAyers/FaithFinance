const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import InsightPage from "./screens/InsightPage";
import TransactionPage from "./screens/TransactionPage";
import TransactionDetailPage from "./screens/TransactionDetailPage";
import ReflectionPage from "./screens/ReflectionPage";
import ProfilePage from "./screens/ProfilePage";
import FavoriteVersesPage from "./screens/FavoriteVersesPage";
import LoadingScreen from "./components/LoadingScreen";
import { DataProvider } from "./context/DataContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [isAppReady, setIsAppReady] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  // Show loading screen for 2 seconds on app start
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
            initialRouteName="HomePage"
            screenOptions={{ headerShown: false }}
          >
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
