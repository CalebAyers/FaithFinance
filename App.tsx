const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PageForSettingFaithGoal from "./screens/PageForSettingFaithGoal";
import HomePage from "./screens/HomePage";
import HomePageReset from "./screens/HomePageReset";
import TransactionDetailedListSpendingDate from "./components/TransactionDetailedListSpendingDate";
import TransactionPageReset from "./screens/TransactionPageReset";
import TransactionPageIncoming from "./screens/TransactionPageIncoming";
import TransactionPageSpending from "./screens/TransactionPageSpending";
import FavoriteVersesPageReset from "./components/FavoriteVersesPageReset";
import TransactionDetailedListSpendingReset from "./components/TransactionDetailedListSpendingReset";
import TransactionDetailedListSpendingCategory from "./components/TransactionDetailedListSpendingCategory";
import Pressed from "./components/Pressed";
import Default2 from "./components/Default2";
import Return from "./components/Return";
import SmallAddTransaction from "./components/SmallAddTransaction";
import SmallEditButton from "./components/SmallEditButton";
import SortedBy from "./components/SortedBy";
import ContentArea from "./components/ContentArea";
import TransactionType from "./components/TransactionType";
import TransactionArea from "./components/TransactionArea";
import Page from "./components/Page";
import FrameComponent from "./components/FrameComponent";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "InstrumentSans-SemiBold": require("./assets/fonts/InstrumentSans-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Add"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="PageForSettingFaithGoal"
                component={PageForSettingFaithGoal}
                options={{ headerShown: false }}
              />
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
                name="Default2"
                component={TransactionDetailedListSpendingDate}
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
              <Stack.Screen
                name="FavoriteVersesPageReset"
                component={FrameComponent}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
