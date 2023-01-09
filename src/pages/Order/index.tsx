import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Order() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Order</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
