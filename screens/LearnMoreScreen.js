// screens/LearnMoreScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LearnMoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Про нас та Доступність</Text>
      <Text style={styles.subtitle}>
        Тут ви знайдете інформацію про нашу місію, принципи доступності (WCAG)
        та історію платформи.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#101828",
    textAlign: "center",
  },
});
