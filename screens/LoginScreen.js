// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // фальшиві облікові дані для тестування
  const MOCK_EMAIL = "uzimirska@gmail.com";
  const MOCK_PASSWORD = "password123";

  const handleLogin = () => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      Alert.alert("Успіх", "Вхід успішний!");
      navigation.replace("Home");
    } else {
      Alert.alert("Помилка входу", "Неправильна електронна пошта або пароль.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.logo}
        />
        <Text style={styles.title}>Увійти до системи</Text>
        <Text style={styles.subtitle}>Продовжуйте роботу з AccessibleHub</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Електронна пошта"
          placeholderTextColor="#3C3835"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#3C3835"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Увага",
              "Функція відновлення пароля ще не реалізована."
            )
          }
        >
          <Text style={styles.forgotPasswordLink}>Забули пароль?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Увійти</Text>
        </TouchableOpacity>

        <Text style={styles.registerPrompt}>
          Не маєте облікового запису?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Registration")}
          >
            Зареєструватися
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    color: "#000000",
  },
  loginButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "700" },
  registerPrompt: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 18,
    color: "#3C3835",
  },
  registerLink: {
    color: "#000000",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  header: { alignItems: "center", marginBottom: 40 },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000",
  },
  subtitle: {
    fontSize: 18,
    color: "#3C3835",
    textAlign: "center",
    lineHeight: 24,
  },
  forgotPasswordLink: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "600",
    alignSelf: "flex-end",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  form: { width: "100%", maxWidth: 350 },
});
