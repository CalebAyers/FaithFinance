const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import HomePageReset from "./components/HomePageReset";
import TransactionPageReset from "./components/TransactionPageReset";
import TransactionPageIncoming from "./components/TransactionPageIncoming";
import TransactionPageSpending from "./components/TransactionPageSpending";
import Pressed from "./components/Pressed";
import ContentArea from "./components/ContentArea";
import TransactionType from "./components/TransactionType";
import TransactionArea from "./components/TransactionArea";
import Page from "./components/Page";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Add"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Add"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageReset"
              component={HomePageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContentArea"
              component={TransactionPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionArea"
              component={TransactionPageIncoming}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page"
              component={TransactionPageSpending}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageReset"
              component={Pressed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContentArea"
              component={ContentArea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContentArea"
              component={TransactionType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionArea"
              component={TransactionArea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page"
              component={Page}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
