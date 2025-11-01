// screens/RegistrationScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password.length < 6) {
      Alert.alert("Помилка", "Пароль повинен містити щонайменше 6 символів.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Помилка", "Паролі не співпадають!");
      return;
    }

    Alert.alert("Успіх", "Реєстрація успішна!");

    navigation.replace("Home");
  };

  // ...

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
        <Text style={styles.title}>Створити обліковий запис</Text>
        <Text style={styles.subtitle}>
          Приєднуйтесь до AccessibleHub сьогодні!
        </Text>
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
          textContentType="newPassword"
        />
        <TextInput
          style={styles.input}
          placeholder="Повторіть пароль"
          placeholderTextColor="#3C3835"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textContentType="newPassword"
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Зареєструватися</Text>
        </TouchableOpacity>

        <Text style={styles.loginPrompt}>
          Вже маєте обліковий запис?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Увійти
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
  header: { alignItems: "center", marginBottom: 40 },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000000",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#3C3835",
    textAlign: "center",
    lineHeight: 24,
  },
  form: { width: "100%", maxWidth: 350 },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    color: "#3C3835",
  },
  registerButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  registerButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "600" },
  loginPrompt: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 18,
    color: "#3C3835",
  },
  loginLink: {
    color: "#000000",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
