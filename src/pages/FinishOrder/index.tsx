import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function FinishOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.title}>Mesa 20</Text>

      <TouchableOpacity style={styles.button}>
        <Feather name='shopping-cart' size={20} color="#1d1d2e" />
        <Text style={styles.textButton}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e",
    paddingVertical: '5%',
    paddingHorizontal: '4%',
  },
  alert: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3fffa3",
    width: "65%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  textButton: {
    color: "#1d1d2e",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
});