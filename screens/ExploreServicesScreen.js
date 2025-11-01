// screens/ExploreServicesScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExploreServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Дослідження Послуг</Text>
      <Text style={styles.subtitle}>
        Тут буде детальний список та інформація про всі доступні сервіси
        AccessibleHub.
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
