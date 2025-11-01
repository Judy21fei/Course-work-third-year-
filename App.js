// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // ✅ Важливий імпорт
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

// Імпортуємо всі екрани
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
          // Початковий екран - Реєстрація
          initialRouteName="Registration"
          screenOptions={{
            // Сховати верхній заголовок для всіх екранів
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
