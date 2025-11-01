import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import ExploreServicesScreen from "./screens/ExploreServicesScreen";
import LearnMoreScreen from "./screens/LearnMoreScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Registration"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Екрани автентифікації */}
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* Основні екрани застосунку */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Services" component={ExploreServicesScreen} />
          <Stack.Screen name="About" component={LearnMoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
