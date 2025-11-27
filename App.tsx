const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ReflectionPage from "./screens/ReflectionPage";
import ReflectionPageReset from "./screens/ReflectionPageReset";
import ProfileProfilePageReset from "./screens/ProfileProfilePageReset";
import ProfileProfilePage from "./screens/ProfileProfilePage";
import FavoriteVersesPage from "./screens/FavoriteVersesPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="AddToFavorite"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="AddToFavorite"
              component={ReflectionPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BibleVerses"
              component={ReflectionPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={ProfileProfilePageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoriteVerses"
              component={ProfileProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default4"
              component={FavoriteVersesPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
