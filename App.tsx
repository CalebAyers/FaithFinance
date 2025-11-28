const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import InsightPageMonthly from "./screens/InsightPageMonthly";
import HomePage from "./screens/HomePage";
import TransactionPageReset from "./screens/TransactionPageReset";
import TransactionPageSpending from "./screens/TransactionPageSpending";
import HomePageReset from "./screens/HomePageReset";
import TransactionDetailedListSpendingDate from "./screens/TransactionDetailedListSpendingDate";
import TransactionPageIncoming from "./screens/TransactionPageIncoming";
import PageForSettingFaithGoal from "./screens/PageForSettingFaithGoal";
import ResetPasswordPage from "./components/ResetPasswordPage";
import FavoriteVersesPageReset from "./screens/FavoriteVersesPageReset";
import TransactionDetailedListSpendingReset from "./components/TransactionDetailedListSpendingReset";
import TransactionDetailedListSpendingCategory from "./components/TransactionDetailedListSpendingCategory";
import Pressed from "./components/Pressed";
import Default2 from "./components/Default2";
import Return from "./components/Return";
import SmallAddTransaction from "./components/SmallAddTransaction";
import SmallEditButton from "./components/SmallEditButton";
import SortedBy from "./components/SortedBy";
import TransactionArea from "./components/TransactionArea";
import FrameComponent from "./components/FrameComponent";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
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
              name="InsightPageMonthly"
              component={InsightPageMonthly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Add"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContentArea"
              component={TransactionPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page"
              component={TransactionPageSpending}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageReset"
              component={HomePageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={TransactionDetailedListSpendingDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionArea"
              component={TransactionPageIncoming}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PageForSettingFaithGoal"
              component={PageForSettingFaithGoal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordPage"
              component={ResetPasswordPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoriteVersesPageReset"
              component={FavoriteVersesPageReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetailedListSpendingReset"
              component={TransactionDetailedListSpendingReset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetailedListSpendingCategory"
              component={TransactionDetailedListSpendingCategory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageReset"
              component={Pressed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={Default2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={Return}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={SmallAddTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={SmallEditButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Default2"
              component={SortedBy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionArea"
              component={TransactionArea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoriteVersesPageReset"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
