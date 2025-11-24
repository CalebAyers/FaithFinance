const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePageReset from "./screens/HomePageReset";
import InsightPageWeekly from "./screens/InsightPageWeekly";
import TransactionPageReset from "./screens/TransactionPageReset";
import InsightPageYearly from "./screens/InsightPageYearly";
import InsightPageReset from "./screens/InsightPageReset";
import ReflectionPageReset from "./screens/ReflectionPageReset";
import AddToFavorite from "./components/AddToFavorite";
import FrameComponent from "./components/FrameComponent";
import FrameComponent1 from "./components/FrameComponent1";
import GivingGoal from "./components/GivingGoal";
import RefreshButton from "./components/RefreshButton";
import SettingFaithGoal from "./components/SettingFaithGoal";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HomePageReset"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="HomePageReset"
              component={HomePageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BibleVerses"
              component={InsightPageWeekly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent2"
              component={TransactionPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsightPageYearly"
              component={InsightPageYearly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InsightPageReset"
              component={InsightPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={ReflectionPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={AddToFavorite}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={FrameComponent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={GivingGoal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={RefreshButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToFavorite"
              component={SettingFaithGoal}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
